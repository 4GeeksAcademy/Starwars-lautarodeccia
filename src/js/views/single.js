import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	//guardar "type"
	const [element, setElement] = useState(null)
	const { characters,planets,vehicles } = store;
	useEffect(() => {
        if (params.theid) {
            if (params.type === "character" && characters?.length > 0) {
                const result = characters.find(character => character.url.split('/')[5] === params.theid);
                setElement(result);
            } else if (params.type === "planet" && planets?.length > 0) {
                const result = planets.find(planet => planet.url.split('/')[5] === params.theid);
                setElement(result);
            } else if (params.type === "vehicle" && vehicles?.length > 0) {
                const result = vehicles.find(vehicle => vehicle.url.split('/')[5] === params.theid);
                setElement(result);
            }
        }
    }, [params, characters, planets, vehicles]);

    return (
        <div className="jumbotron">
            {element && params.type === "character" && (
                <div className="contener d-flex flex-column">
                    <div className="d-flex" style={{ alignItems: "flex-start" }}>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${element.url.split('/')[5]}.jpg`} className="card-img-top" alt={element.name} style={{ width: "auto", height: "auto", marginRight: "15px" }} />
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <h5 className="card-title">{element.name}</h5>
                            <div className="d-flex flex-column">
                                <p className="infoSingle">Height: {element.height}</p>
                                <p className="infoSingle">Mass: {element.mass}</p>
                                <p className="infoSingle">Hair color: {element.hair_color}</p>
                                <p className="infoSingle">Skin_color: {element.skin_color}</p>
                                <p className="infoSingle">Eye color: {element.eye_color}</p>
                                <p className="infoSingle">Birth_year: {element.birth_year}</p>
                                <p className="infoSingle">Gender: {element.gender}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        {/* Additional character-specific content */}
                    </div>
                </div>
            )}
            {element && params.type === "planet" && (
                <div className="contener d-flex flex-column">
                    <div className="d-flex" style={{ alignItems: "flex-start" }}>
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${element.url.split('/')[5]}.jpg`} className="card-img-top" alt={element.name} style={{ width: "auto", height: "auto", marginRight: "15px" }} />
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <h5 className="card-title">{element.name}</h5>
                            <div className="d-flex flex-column">
                                <p className="infoSingle">Rotation_period: {element.rotation_period}</p>
                                <p className="infoSingle">Orbital_period: {element.orbital_period}</p>
                                <p className="infoSingle">Diameter: {element.diameter}</p>
                                <p className="infoSingle">Climate: {element.climate}</p>
                                <p className="infoSingle">Gravity: {element.gravity}</p>
                                <p className="infoSingle">Terrain: {element.terrain}</p>
                                <p className="infoSingle">Surface_water: {element.surface_water}</p>
                                <p className="infoSingle">Population: {element.population}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        {/* Additional planet-specific content */}
                    </div>
                </div>
            )}
            {element && params.type === "vehicle" && (
                <div className="contener d-flex flex-column">
                    <div className="d-flex" style={{ alignItems: "flex-start" }}>
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${element.url.split('/')[5]}.jpg`} className="card-img-top" alt={element.name} style={{ width: "auto", height: "auto", marginRight: "15px" }} />
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <h5 className="card-title">{element.name}</h5>
                            <div className="d-flex flex-column">
                                <p className="infoSingle">Model: {element.model}</p>
                                <p className="infoSingle">Manufacturer: {element.manufacturer}</p>
                                <p className="infoSingle">Cost_in_credits: {element.cost_in_credits}</p>
                                <p className="infoSingle">Length: {element.length}</p>
                                <p className="infoSingle">Max_atmosphering_speed: {element.max_atmosphering_speed}</p>
                                <p className="infoSingle">Crew: {element.crew}</p>
                                <p className="infoSingle">Passengers: {element.passengers}</p>
                                <p className="infoSingle">Cargo_capacity: {element.cargo_capacity}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        {/* Additional vehicle-specific content */}
                    </div>
                </div>
            )}
        </div>
    );
};
Single.propTypes = {
	match: PropTypes.object
};
