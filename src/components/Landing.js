import React from 'react';
import './Compare';

class Landing extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoaded: true,
            cars: null,
            error: null,
            count: 0,
            selected: [],
            searchTerm: ""
        }
        this.handleClick = this.handleClick.bind(this)
    }

    fetchCarList() {
        fetch('https://hrishis-car-rest-service.herokuapp.com/car/list')
            .then(resp => resp.json())
            .then(result => {
                console.log(result)
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

    handleClick(event) {
        if (event.target.checked) {
            this.setState(prevState => {
                return {
                    count: prevState.count + 1
                }
            })
        }
        else {
            this.setState(prevState => {
                return {
                    count: prevState.count - 1
                }
            })
        }
    }

    render() {
        const { isLoaded, cars, error } = this.state;
        return (
            <>
                <div style={{ justifyContent: "center", textAlign: "center" }}>

                    <div className="bg-white p-5 rounded">
                        <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <button id="button-addon1" className="btn btn-link text-primary">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                                <input
                                    type="search"
                                    placeholder="What're you searching for?"
                                    aria-describedby="button-addon1"
                                    className="form-control border-0 bg-light"
                                    onChange={(event) => {
                                        this.setState({
                                            searchTerm: event.target.value
                                        })
                                    }}
                                />
                            </div>
                        </div>
                    </div> <div className="SelectedCars" style={{ display: this.state.count < 2 ? "none" : "block" }}>
                        sjjsnncvbccbcbb
                    </div>

                    <div className="row align-items-center" style={{ margin: "5px", justifyContent: "center", textAlign: "left" }}>
                        {error ? <p>{error.message}</p> : null}
                        {!isLoaded ?
                            (
                                cars ?
                                    cars.filter((item) => {
                                        if (this.state.searchTerm === "") {
                                            return item;
                                        }
                                        else if (item.identificationID.toLowerCase().includes(this.state.searchTerm.toLocaleLowerCase().trim())) {
                                            return item;
                                        }
                                        return null;
                                    }).map((item, i) =>
                                        <div className="card col-md-auto cardHover" style={{ width: "18rem", padding: "0%" }} key={i}>
                                            <img className="card-img-top" src="/images/car.jpg" alt="details" />
                                            <div className="card-body">
                                                <p className="card-text CarName">
                                                    {item.identificationID.toUpperCase()}
                                                </p>

                                                <p className="card-text CarDetails">
                                                    MPG : {item.fuelinformationhighwaympg}
                                                </p>

                                                <p className="card-text CarDetails">
                                                    HorsePower : {item.engineinformationengine_statisticshorsepower}
                                                    <input
                                                        className="Checkbox"
                                                        type="checkbox"
                                                        onChange={this.handleClick}
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                    )
                                    : null
                            )
                            : (
                                <h3>Loading...</h3>
                            )}
                    </div>
                   
                    <button id="button-addon1" className="btn btn-link text-primary Comparison" disabled={this.state.count < 2 && true} style={{ border: this.state.count < 2 ? "none" : "1px solid blue" }}>
                        <img src="/images/compare.svg" alt="Compare" />
                    </button>
                </div>
            </>
        );
    }
}

export default Landing;
/*

                {this.state.error ? <p>{this.state.error}</p> : null}
                {!this.state.isLoaded ?
                    (
                        this.state.users ?
                            this.state.users.map((item, i) =>
                                <div key={i}>
                                    <p>
                                        {item}
                                    </p>
                                </div>
                            )
                            :
                            null
                    )
                    : (
                        <h3>Loading...</h3>
                    )}
 */