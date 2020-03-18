// all fetch requests will go in here
const API_ROOT = `http://localhost:4000/api/v1`;

const token = () => localStorage.getItem("token");

const headers = () => {
    return {
        "Content-Type": "application/json",
        Accepts: "application/json",
        Authorization: token()
    };
};

const getPlants = () => {
    return fetch(`${API_ROOT}/plants/`, { headers: headers() }).then(res =>
        res.json()
    );
};

const login = data => {
    return fetch(`${API_ROOT}/login`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(data)
    }).then(res => res.json());
};

const getCurrentUser = () => {
    // console.log("getting current user", headers);
    return fetch(`${API_ROOT}/profile`, {
        headers: headers()
    }).then(res => {
        // console.log(res)
        return res.json();
    });
};

export const api = {
    auth: {
        login,
        getCurrentUser
    },
    plants: {
        getPlants
    }
};