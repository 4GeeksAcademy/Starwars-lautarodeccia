const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			getCharacters: async () => {
				try {
					const response = await fetch('https://swapi.dev/api/people');
					if (!response.ok) {
						throw new Error(`HTTP error! Status: ${response.status}`);
					}
					const data = await response.json();
					const charactersWithIds = data.results.map(character => {
						const id = character.url.split('/')[5]; // Extrae el ID de la URL del personaje
						return { ...character, id }; // Añade el ID al objeto del personaje
					});
					setStore({ characters: charactersWithIds }); // Establece los personajes en el store
				} catch (error) {
					console.error("Error al cargar los personajes:", error.message);
				}
			},
			getPlanets: async () => {
				try {
					const response = await fetch('https://swapi.dev/api/planets');
					if (!response.ok) {
						throw new Error(`HTTP error! Status: ${response.status}`);
					}
					const data = await response.json();
					const planetsWithIds = data.results.map(planet => {
						const id = planet.url.split('/')[5]; // Extrae el ID de la URL del personaje
						return { ...planet, id }; // Añade el ID al objeto del personaje
					});
					setStore({ planets: planetsWithIds }); // Establece los personajes en el store
				} catch (error) {
					console.error("Error al cargar los personajes:", error.message);
				}
			},
			getVehicles: async () => {
				try {
					const response = await fetch('https://swapi.dev/api/vehicles');
					if (!response.ok) {
						throw new Error(`HTTP error! Status: ${response.status}`);
					}
					const data = await response.json();
					const vehiclesWithIds = data.results.map(vehicle => {
						const id = vehicle.url.split('/')[5]; // Extrae el ID de la URL del personaje
						return { ...vehicle, id }; // Añade el ID al objeto del personaje
					});
					setStore({ vehicles: vehiclesWithIds }); // Establece los personajes en el store
				} catch (error) {
					console.error("Error al cargar los personajes:", error.message);
				}
			},

			addFavorite: (name) => {
                const store = getStore();
                if (!store.favorites.includes(name)) {
                    setStore({ favorites: [...store.favorites, name] });
                }
            },
            removeFavorite: (name) => {
                const store = getStore();
                setStore({ favorites: store.favorites.filter(fav => fav !== name) });
            },
            toggleFavorite: (name) => {
                const store = getStore();
                if (store.favorites.includes(name)) {
                    getActions().removeFavorite(name);
                } else {
                    getActions().addFavorite(name);
                }
            }
        
		}
	}
};

export default getState;
