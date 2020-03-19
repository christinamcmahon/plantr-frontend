import cuid from "cuid";
export const cuidFn = cuid;

const defaultState = {
    plants: []
}

export default function plantsReducer(state = defaultState, action) {
    let idx
    console.log('INSIDE PLANTS REDUCER action', action)
    console.log('INSIDE PLANTS REDUCER state', state)
    switch (action.type) {
        case "ADD_PLANT":
            return {
                plants: [...state.plants, action.payload]
            }
        case "DELETE_PLANT":
            idx = state.plants.findIndex(plant => plant.id === action.id)
            return [...state.plants.slice(0, idx), ...state.plants.slice(idx + 1)]
        case "UPDATE_PLANT":
            const updatedPlant = {
                name: action.plant.name,
                id: action.plant.id,
                notes: action.plant.notes,
                water_frequency: action.plant.water_frequency,
                image_url: action.plant.image_url
            };
            return {
                plants: [...state.plants.map(plant => {
                    return plant.id === action.plant.id ? updatedPlant : plant
                })]
            }
        default:
            return state;
    }
}