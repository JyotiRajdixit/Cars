import React from 'react';
import Header from './Header.jsx';
import Cars from './Cars.jsx';
import './App.css';


class Car extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoaded: true,
            cars: null,
            error: null,
            count: 0,
            selected: [],
            searchTerm: "",
            show: true
        };
        this.handleClick = this.handleClick.bind(this)
    }

    fetchCarList() {
        fetch('https://hrishis-car-rest-service.herokuapp.com/car/list')
            .then(resp => resp.json())
            .then(result => {
                this.setState({
                    cars: result,
                    isLoaded: false
                })
            })
            .catch(error => this.setState({ error, isLoaded: false }));
    }

    componentDidMount() {
        this.fetchCarList();
    }

    handleClick = (item) => (event) => {
        if (event.target.checked) {
            this.setState(prevState => {
                return {
                    count: prevState.count + 1,
                    selected: [...this.state.selected, item.identificationID.toUpperCase()]
                }
            })
        }
        else {
            const newSelected = this.state.selected.filter(i => i !== item.identificationID.toUpperCase())
            this.setState(prevState => {
                return {
                    count: prevState.count - 1,
                    selected: newSelected
                }
            })
        }
    }

    UpdateSearchTerm = (setTerm) => {
        this.setState({
            searchTerm: setTerm
        })
    }

    render() {
        const { isLoaded, cars, error } = this.state;

        return (
                <div style={{ justifyContent: "center", textAlign: "center" }}>

                    <Header 
                        UpdateSearchTerm={this.UpdateSearchTerm} 
                        count={this.state.count} 
                        selected={this.state.selected}
                    />

                    <div className="row align-items-center" 
                         style={{ margin: "5px", justifyContent: "center", textAlign: "left", display: this.state.show ? "" : "none" }}>

                        {error ? <p>{error.message}</p> : null}

                        {
                            !isLoaded ?
                            (
                                cars ?
                                    <Cars
                                        cars={cars}
                                        searchTerm={this.state.searchTerm}
                                        handleClick={this.handleClick}
                                        selected={this.state.selected}
                                    />
                                    : null
                            )
                            : (
                                <h3>Loading...</h3>
                            )
                        }
                    </div>
                </div>
        )
    }
}

export default Car;
