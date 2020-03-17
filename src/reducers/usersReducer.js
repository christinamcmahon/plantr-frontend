import cuid from "cuid";
export const cuidFn = cuid;

export default function usersReducer(state = [], action) {
    let idx
    switch (action.type) {
        case "ADD_USER":
            return [...state, action.user]
        case "DELETE_USER":
            idx = state.findIndex(user => user.id === action.id)
            return [...state.slice(0, idx), ...state.slice(idx + 1)]
        case "UPDATE_USER":
            const updatedUser = {
                name: action.user.name,
                id: action.user.id,
                username: action.user.username,
                avatar_url: action.user.avatar_url,
                email: action.user.email,
                notification: action.user.notification
            };
            return [...state.map(user => {
                return user.id === action.id ? updatedUser : user
            })]
        default:
            return state;
    }
}