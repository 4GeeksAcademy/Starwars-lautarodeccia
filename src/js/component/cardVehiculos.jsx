import React, { Component, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
export const CardVehicle = () => {
    const { store, actions } = useContext(Context);
    const { vehicles } = store; // Obtener el personaje del estado global


    if (!vehicles) {
        return <div>Loading...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
    }

    return (
        <div className="contener">
            {store.vehicles && store.vehicles.map((vehicle) => (
                <div className="card" style={{ minWidth: "20em", margin: "15px", width: "500px" }} key={vehicle.name}>
                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.id}.jpg`} className="d-block w-100 card-img-top" alt={vehicle.name} />
                    <div className="card-body d-flex flex-column justify-content-between">
                        <div>
                            <h5 className="card-title" style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 2, overflow: "hidden" }}>{vehicle.name}</h5>
                            <div className="d-flex flex-column ">
                                <p className="infoAuto">model: {vehicle.model}</p>
                                <p className="infoAuto">cost_in_credits: {vehicle.cost_in_credits}</p>
                                <p className="infoAuto">manufacturer: {vehicle.manufacturer}</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between" style={{ marginTop: "15px" }}>
                            <Link to={"/single/vehicle/" + vehicle.id} className="btn btn-primary">Learn more!</Link>
                            <button style={{ border: '2px solid yellow' }} onClick={() => actions.toggleFavorite(vehicle.name)}>
                                <i className={store.favorites.includes(vehicle.name) ? "fas fa-heart" : "far fa-heart"} style={{ color: "#FFD43B" }}></i>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};