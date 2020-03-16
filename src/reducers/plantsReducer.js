import cuid from "cuid";
export const cuidFn = cuid;

export default function plantsReducer(
    state = {
        plants: []
    },
    action
) {
    switch (action.type) {
        case "ADD_PLANT":
            const newPlant = {
                id: cuid(),
                name: action.plant.name,
                notes: action.plant.notes,
                water_frequency: action.plant.water_frequency,
                image_url: action.plant.image_url
            };
            return { ...state, plants: [...state.plants, newPlant] };
        case "DELETE_PLANT":
            return {
                ...state,
                plants: state.plants.filter(plant => plant.id !== action.id)
            };
        case "UPDATE_PLANT":
            const updatedPlant = {
                name: action.plant.name,
                id: action.plant.id,
                notes: action.plant.notes,
                water_frequency: action.plant.water_frequency,
                image_url: action.plant.image_url
            };
            return {
                ...state,
                plants: state.plants.map(plant => {
                    return plant.id === action.plant.id ? updatedPlant : plant;
                })
            };
        default:
            return state;
    }
}