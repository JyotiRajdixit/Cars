import React from 'react';
import './App.css';


class CarDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoaded: true,
            car: null,
            error: null
        };
    }

    fetchCar() {
        fetch(`https://hrishis-car-rest-service.herokuapp.com/car/${this.props.match.params.id}`)
            .then(resp => resp.json())
            .then(result => {
                this.setState({
                    car: result,
                    isLoaded: false
                })
            })
            .catch(error => this.setState({ error, isLoaded: false }));
    }

    componentDidMount() {
        this.fetchCar();
    }
    render() {
        const { isLoaded, car, error } = this.state;
        return (
            <div style={{ textAlign: "center", justifyContent: "center" }}>
                {error ? <p>{error.message}</p> : null}
                {
                    !isLoaded ?
                        (
                            car ?
                                <ul style={{ listStyle: "none" }}>
                                    <li>Car Name : {car.identificationID}</li>
                                    <li> HorsePower : {car.engineinformationengine_statisticshorsepower}</li>
                                    <li> Forward Gears : {car.engineinformationnumberofforwardgears}</li>
                                    <li> Fuel Type : {car.fuelinformationfueltype}</li>
                                    <li> Fuel mpg in City : {car.fuelinformationcitympg}</li>
                                    <li> Fuel mpg on Highway :{car.fuelinformationhighwaympg}</li>
                                    <li> Year : {car.identificationmodelyear}</li>
                                </ul>
                                : null
                        )
                        : (
                            <h3>Loading...</h3>
                        )
                }
            </div>
        )
    }
}

export default CarDetails;
