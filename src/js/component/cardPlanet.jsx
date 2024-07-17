import React, { Component, useContext, useEffect,useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardPlanet = () => {
    const { store, actions } = useContext(Context);
    const { planets } = store; // Obtener el personaje del estado global

    if (!planets) {
        return <div>Loading...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
    }
   
    return (
        <div className="contener" style={{ marginBottom: "20px" }}>
            {store.planets && store.planets.map((planet) => (
                <div className="card" style={{ minWidth: "20em", margin: "15px", width: "500px" }} key={planet.name}>
                    <img onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"} src={`https://starwars-visualguide.com/assets/img/planets/${planet.id}.jpg`} className="d-block w-100 card-img-top" alt="Star Wars Character" style={{ maxHeight: "318px", objectFit: "cover" }} />
                    <div className="card-body" style={{}}>
                        <h5 className="card-title">{planet.name}</h5>
                        <div className="d-flex flex-column">
                            <p className="info">population: {planet.population}</p>
                            <p className="info" style={{ height: "35px" }}>terrain: {planet.terrain}</p>
                        </div>
                        <div className="d-flex justify-content-between" style={{ marginTop: "15px" }}>
                            <Link to={"/single/planet/" + planet.id} className="btn btn-primary">Learn more!</Link>
                            <button style={{ border: '2px solid yellow' }} onClick={() => actions.toggleFavorite(planet.name)}>
                        <i className={store.favorites.includes(planet.name) ? "fas fa-heart" : "far fa-heart"} style={{ color: "#FFD43B" }}></i>
                    </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
