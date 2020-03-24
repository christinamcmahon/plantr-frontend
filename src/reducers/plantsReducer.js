import cuid from "cuid";
export const cuidFn = cuid;

const defaultState = {
    plants: []
}

export default function plantsReducer(state = defaultState, action) {
    console.log('INSIDE PLANTS REDUCER action', action)
    console.log('INSIDE PLANTS REDUCER state', state)
    switch (action.type) {
        case "FETCH_PLANTS":
            // console.log("INSIDE plantsReducer FETCH", action.payload.plant_info.plants)
            return {
                ...state,
                plants: action.payload.plant_info.plants.map(plant => {
                    return plant
                })
            }
        case "ADD_PLANT":
            return {
                ...state,
                plants: [...state.plants, action.payload]
            }
        case "DELETE_PLANT":
            let newPlants = state.plants.filter((plant) => plant.id !== action.payload.id)
            return {
                ...state,
                plants: newPlants

            }
        case "UPDATE_PLANT":
            const updatedPlant = {
                name: action.payload.plant.name,
                id: action.payload.plant.id,
                notes: action.payload.plant.notes,
                water_frequency: action.payload.plant.water_frequency,
                image_url: action.payload.plant.image_url
            };
            return {
                plants: [...state.plants.map(plant => {
                    return plant.id === action.payload.plant.id ? updatedPlant : plant
                })]
            }
        default:
            return state;
    }
}