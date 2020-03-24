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
            console.log("INSIDE UPDATE", action.payload)
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