import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Header(props) {

    return (
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
                            style={{padding:"0%"}}
                            onChange={(event) => props.UpdateSearchTerm(event.target.value)}
                        />
                    </div>
                </div>

                <Link to={{
                    pathname: "/comparecars",
                    state: {
                        selectedCars : props.selected
                    }
                }}
                >
                    <button
                        type="button"
                        className="btn btn-light Comparison"
                        disabled={props.count < 2 && true}
                        style={{ boxShadow: props.count < 2 ? "none" : "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px" }}>
                        Compare
                    </button>
                </Link>

            </div>
    );
}

export default Header;
