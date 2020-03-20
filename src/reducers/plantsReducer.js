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
                ...state,
                plants: [...state.plants, action.payload]
            }
        case "DELETE_PLANT":
            idx = state.plants.findIndex(plant => plant.id === action.id)
            return [...state.plants.slice(0, idx), ...state.plants.slice(idx + 1)]
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