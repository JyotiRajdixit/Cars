import React, { useState, useEffect } from 'react';
import firebaseDb from "../firebase";
import './Compare.css';


const Landing2 = () => {
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
            <div className="row align-items-center" style={{ margin: "5px", justifyContent: "center", textAlign: "left" }}>
                    {
                        Object.keys(contactObjects).map(id => {
                            return <div className="card col-md-auto" style={{width: "18rem", padding:"0%"}} key={id}>
                                <img className="card-img-top" src="/images/car.jpg" />
                                <div className="card-body">
                                    <p className="card-text CarName">{contactObjects[id].Name.toUpperCase()}</p>
                                    <p className="card-text CarDetails">HorsePower : {contactObjects[id].Horsepower}</p>
                                    <p className="card-text CarDetails">Acceleration : {contactObjects[id].Acceleration}</p>
                                </div>
                            </div>

                        })
                    }
            </div>
        </div>
    )
}
export default Landing2;


/*

*/