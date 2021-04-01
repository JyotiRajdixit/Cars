import React from 'react';
import { Link } from "react-router-dom";
import './App.css';

class CompareCars extends React.Component {
    constructor() {
        super();
        this.state = {
            cars: null 
        }
    }

    fetchCars = async () => {
        let allCars = []
    
        for (let i = 0; i < this.props.location.state.selectedCars.length; i++) {
            const response = await fetch(`https://hrishis-car-rest-service.herokuapp.com/car/name/${this.props.location.state.selectedCars[i]}`)
            const json = await response.json()
            allCars.push(json) 
        }

        this.setState({
            cars: allCars
        })

        console.log(this.state.cars)
    }

    componentDidMount() {
        this.setState({
            data: this.props.location.state.selectedCars
        })
        this.fetchCars();        
    }
    render() {
        return (
            <div style={{ justifyContent: "center", textAlign: "center" }}>
                <Link to="/">
                    <button
                        type="button"
                        className="btn btn-light Comparison"
                        style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px" }}>
                        Home
                    </button>
                </Link>
            <div className="jumbotron jumbotron-fluid" style={{ paddingTop: "0%", justifyContent: "left", textAlign: "left" }}>
                <div className="container" style={{ padding: "0%" }}>
                    <h1 className="display-4 text-left">Compare</h1>
                </div>
            </div>
            <div className="row align-items-center" style={{ margin: "5px", justifyContent: "center", textAlign: "center" }}>
                <div className="col-md-auto table-responsive">
                    <table className="table table-borderless">
                        <tbody>
                            <tr>
                                <td className="Active sticky-col" style={{padding:"0",margin:"0"}}>
                                    <table className="table table-borderless table-hover table-props" style={{ width: window.innerWidth < 685 ? "30vw" : "18vw"}}>
                                        <thead><tr><th><br /></th></tr></thead>
                                        <tbody>
                                            <tr><td>HorsePower</td></tr>
                                            <tr><td>Gears</td></tr>
                                            <tr><td>Fuel Type</td></tr>
                                            <tr><td>Mileage</td></tr>
                                            <tr><td>Model Year</td></tr>
                                            <tr><td>Brand Name</td></tr>
                                        </tbody>
                                    </table>
                                </td>

                                {
                                    this.state.cars ? 
                                    this.state.cars.map(item =>
                                        <td className="Active" key={item.id} style={{padding:"0",margin:"0"}}>
                                            <table className="table table-borderless table-shade table-hover" style={{ width: window.innerWidth < 685 ? (window.innerWidth>500?"30vw" :(window.innerWidth > 400 ? "40vw" : "50vw")) : (window.innerWidth < 990 ? "30vw" : "20vw") }}>
                                                <thead className="tablehead">
                                                    <tr><th>{item.identificationID}</th></tr>
                                                </thead>
                                                <tbody>
                                                    <tr><td>{item.engineinformationengine_statisticshorsepower}</td></tr>
                                                    <tr><td>{item.engineinformationnumberofforwardgears}</td></tr>
                                                    <tr><td>{item.fuelinformationfueltype}</td></tr>
                                                    <tr><td>{item.fuelinformationcitympg}-{item.fuelinformationhighwaympg}</td></tr>
                                                    <tr><td>{item.identificationyear}</td></tr>
                                                    <tr><td>{item.identificationmake}</td></tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    )
                                    : null
                                }
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        )
    }
}

export default CompareCars;
