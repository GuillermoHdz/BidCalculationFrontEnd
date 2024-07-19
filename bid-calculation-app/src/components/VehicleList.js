import React, { useEffect, useState } from "react";

const VehicleList = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5174/api/Vehicle')
        .then(response => response.json())
        .then(data => setVehicles(data));
    }, []);

    return(
        <div className="container">
            <div className="content">
                <div className="card">
                    <div className="card-content">
                        <div className="content">
                            <div className="columns">
                                <div className="column">Price</div>
                                <div className="column">Type</div>
                                <div className="column">Basic</div>
                                <div className="column">Special</div>
                                <div className="column">Association</div>
                                <div className="column">Storage</div>
                                <div className="column">Total</div>
                            </div>
                            { vehicles.map(v => 
                                <div className="columns" key={v.Id}>
                                    <div className="column">{ v.Vehicle_Price }</div>
                                    <div className="column">{ v.Vehicle_Type }</div>
                                    <div className="column">{ v.Basic }</div>
                                    <div className="column">{ v.Special }</div>
                                    <div className="column">{ v.Association }</div>
                                    <div className="column">{ v.Storage }</div>
                                    <div className="column">{ v.Total }</div>
                                </div>
                            ) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VehicleList;