import React from 'react';
import { Link } from 'react-router-dom';

function Cars(props) {

    return (
        props.cars.filter((item) => {
            if (props.searchTerm === "") {
                return item;
            }
            else if (item.identificationID.toUpperCase().includes(props.searchTerm.toUpperCase().trim())) {
                return item;
            }
            return null;
        }).map((item, i) =>
            <div className="card col-md-auto cardHover" style={{ width: "18rem", padding: "0%" }} key={i}>
                <img className="card-img-top" src="/images/car.jpg" alt="details" />
                <div className="card-body">
                    <p className="card-text CarName">
                        <Link to={`/car/${item.id}`}>
                            {item.identificationID.toUpperCase()}
                        </Link>
                    </p>

                    <p className="card-text CarDetails">
                        MPG : {item.fuelinformationhighwaympg}
                    </p>

                    <p className="card-text CarDetails">
                        HorsePower : {item.engineinformationengine_statisticshorsepower}
                        <input
                            className="Checkbox"
                            type="checkbox"
                            onChange={props.handleClick(item)}
                            checked={props.selected.includes(item.identificationID.toUpperCase())}
                        />
                    </p>
                </div>
            </div>
        )
    )
}

export default Cars;
