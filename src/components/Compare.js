import React, { useState, useEffect } from 'react';
import firebaseDb from "../firebase";
import './Compare.css';


const Compare = () => {


    var [contactObjects, setContactObjects] = useState({})

    useEffect(() => {
        firebaseDb.child('cars').on('value', snapshot => {
            if (snapshot.val != null)
                setContactObjects({
                    ...snapshot.val()
                })
        })
    }, [])

    return (
        <div style={{ justifyContent: "center", textAlign: "center" }}>
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
                                <td className="Active sticky-col">
                                    <table className="table table-borderless table-hover table-props" style={{ width: window.innerWidth < 685 ? "30vw" : "18vw" }}>
                                        <thead><tr><th><br /></th></tr></thead>
                                        <tbody>
                                            <tr><td>Acceleration</td></tr>
                                            <tr><td>Cylinders</td></tr>
                                            <tr><td>HorsePower</td></tr>
                                            <tr><td>Year</td></tr>
                                            <tr><td>Origin</td></tr>
                                        </tbody>
                                    </table>
                                </td>

                                {
                                    Object.keys(contactObjects).map(id => {
                                        return <td className="Active" key={id}>
                                            <table className="table table-borderless table-shade table-hover" style={{ width: window.innerWidth < 685 ? "50vw" : (window.innerWidth < 990 ? "20vw" : "15vw") }}>
                                                <thead className="tablehead">
                                                    <tr><th>{contactObjects[id].Name}</th></tr>
                                                </thead>
                                                <tbody>
                                                    <tr><td>{contactObjects[id].Acceleration}</td></tr>
                                                    <tr><td>{contactObjects[id].Cylinders}</td></tr>
                                                    <tr><td>{contactObjects[id].Horsepower}</td></tr>
                                                    <tr><td>{contactObjects[id].Year}</td></tr>
                                                    <tr><td>{contactObjects[id].Origin}</td></tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    })
                                }
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Compare;