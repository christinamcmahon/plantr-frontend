import cuid from "cuid";
export const cuidFn = cuid;

const defaultState = {
    plants: []
}

export default function plantsReducer(state = defaultState, action) {
    console.log('INSIDE PLANTS REDUCER action', action)
    console.log('INSIDE PLANTS REDUCER state', state)
    switch (action.type) {
        case "ADD_PLANT":
            return {
                ...state,
                plants: [...state.plants, action.payload]
            }
        case "DELETE_PLANT":
            // idx = state.plants.findIndex(plant => plant.id === action.id)
            let newPlants = state.plants.filter((plant) => plant.id !== action.payload.id)
            console.log("INSIDE DELETE_PLANT", action, newPlants)
            return {
                ...state,
                plants: newPlants

            }
        case "UPDATE_PLANT":
            const updatedPlant = {
                name: action.payload.name,
                id: action.payload.id,
                notes: action.payload.notes,
                water_frequency: action.payload.water_frequency,
                image_url: action.payload.image_url
            };
            return {
                plants: [...state.plants.map(plant => {
                    return plant.id === action.payload.id ? updatedPlant : plant
                })]
            }
        default:
            return state;
    }
}