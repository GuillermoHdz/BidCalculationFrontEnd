import React, { useEffect, useState } from "react";

const Add = () => {
    const [types, setTypes] = useState([]);
    const [vehiclePrice, setVehiclePrice] = useState(0);
    const [vehicleType, setVehicleType] = useState(1);
    const [addedVehicle, setAddedVehicle] = useState({});

    useEffect(() => {
        fetch('http://localhost:5174/api/Vehicle/Types')
        .then(response => response.json())
        .then(data => setTypes(data));
    }, []);

    function addVehicle(e) {
        e.preventDefault();
        const requestOptions = {
            mode: 'cors',
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ vehicle_Price: parseInt(vehiclePrice), vehicle_Type: parseInt(vehicleType) })
        };

        fetch('http://localhost:5174/api/Vehicle', requestOptions)
        .then(response => response.json())
        .then(data => setAddedVehicle(data));
    }
    return(
        <div className="container">
            <div className="content">
                <div className="card">
                    <header className="card-header">
                        <p className="card-header-title">Add Vehicle</p>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            <form onSubmit={addVehicle}>
                                <div className="columns">
                                    <div className="column">
                                        <div className="field has-addons">
                                            <div className="control">
                                                <span className="select">
                                                    <select onChange={ e => setVehicleType(e.target.value) }>
                                                        {
                                                            types.map(t => 
                                                                <option value={t.Id} key={t.Id}>{t.Type}</option>
                                                                )
                                                        }
                                                    </select>
                                                </span>
                                            </div>
                                            <div className="control">
                                                <input className="input" type="number" placeholder="Vehicle Price" onChange={e => setVehiclePrice(e.target.value)}></input>
                                            </div>
                                            <div className="control">
                                                <button className="button is-primary" type="submit">Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Add;