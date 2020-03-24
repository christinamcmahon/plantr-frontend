export const loginUser = (username, password, goToPlants, fetchPlants) => {
    return (dispatch) => {
        dispatch({ type: "AUTHENTICATING_USER" })
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password
                }
            })
        })
            .then(response => {
                console.log(response)
                if (response.ok) {
                    return response.json()
                } else {
                    throw response
                }
            })
            .then(JSONResponse => {
                console.log('INSIDE YE OLDE .THEN', goToPlants)
                localStorage.setItem('jwt', JSONResponse.jwt) // where we keep our token
                console.log('JSONRESPONSE:', JSONResponse)
                goToPlants()
                fetchPlants(JSONResponse.user)
                dispatch({ type: 'SET_CURRENT_USER', payload: JSONResponse.user })
            })
            .catch(e => console.log(e))
    }
}

export const fetchCurrentUser = () => {
    // takes the token in localStorage and finds out who it belongs to
    return (dispatch) => {
        dispatch(authenticatingUser())
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/profile`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        })
            .then(response => response.json())
            .then((JSONResponse) => dispatch(setCurrentUser(JSONResponse.user)))
    }
}

export const setCurrentUser = (userData) => ({
    type: 'SET_CURRENT_USER',
    payload: userData
})

export const failedLogin = (errorMsg) => ({
    type: 'FAILED_LOGIN',
    payload: errorMsg
})

// tell our app we're currently fetching
export const authenticatingUser = () => ({ type: 'AUTHENTICATING_USER' })

export const signUpUser = (user) => {
    console.log('INSIDE SIGNUP', user)
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ user })
        })
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then(response => {
                            console.log("INSIDE SIGNUP", response)
                            dispatch({
                                type: "SET_CURRENT_USER",
                                payload: response.user
                            });
                        });
                }
                return response
            })
            .catch(e => console.log(e))
    }
}