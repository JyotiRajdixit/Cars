import React from 'react';
import './Compare';

function Header() {
    return (
        <>
            <div className="bg-white p-5 rounded">
                <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <button id="button-addon1" className="btn btn-link text-primary">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                        <input type="search" placeholder="What're you searching for?" aria-describedby="button-addon1" className="form-control border-0 bg-light" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;