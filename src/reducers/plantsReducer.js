import cuid from "cuid";
export const cuidFn = cuid;

const defaultState = {
    plants: []
}

export default function plantsReducer(state = defaultState, action) {
    let idx
    switch (action.type) {
        case "ADD_PLANT":
            return [...state, action.plant]
        case "DELETE_PLANT":
            idx = state.findIndex(plant => plant.id === action.id)
            return [...state.slice(0, idx), ...state.slice(idx + 1)]
        case "UPDATE_PLANT":
            const updatedPlant = {
                name: action.plant.name,
                id: action.plant.id,
                notes: action.plant.notes,
                water_frequency: action.plant.water_frequency,
                image_url: action.plant.image_url
            };
            return [...state.map(plant => {
                return plant.id === action.id ? updatedPlant : plant
            })]
        default:
            return state;
    }
}