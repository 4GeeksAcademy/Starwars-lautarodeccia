import React, { Component, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
export const Card = () => {
    const { store, actions } = useContext(Context);
    const { characters } = store; // Obtener el personaje del estado global


    if (!characters) {
        return <div>Loading...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
    }

    return (
        <div className="contener">
            {store.characters && store.characters.map((character) => (
                <div className="card" style={{ minWidth: "20em", margin: "15px", width: "500px" }} key={character.name}>
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`} className="d-block w-100 card-img-top" alt={character.name} />
                    <div className="card-body">
                        <h5 className="card-title" style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 2, overflow: "hidden" }}>{character.name}</h5>
                        <div className="d-flex flex-column">
                            <p className="info">Gender: {character.gender}</p>
                            <p className="info">Hair color: {character.hair_color}</p>
                            <p className="info">Eye color: {character.eye_color}</p>
                        </div>
                        <div className="d-flex justify-content-between" style={{ marginTop: "15px" }}>
                            <Link to={"/single/character/" + character.id} className="btn btn-primary">Learn more!</Link>
                            <button style={{ border: '2px solid yellow' }} onClick={() => actions.toggleFavorite(character.name)}>
                                <i className={store.favorites.includes(character.name) ? "fas fa-heart" : "far fa-heart"} style={{ color: "#FFD43B" }}></i>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};