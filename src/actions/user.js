export const loginUser = (username, password) => {
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
                console.log('%c INSIDE YE OLDE .THEN', 'color: navy')
                localStorage.setItem('jwt', JSONResponse.jwt) // where we keep our token
                console.log('JSONRESPONSE:', JSONResponse)
                dispatch({ type: 'SET_CURRENT_USER', payload: JSONResponse.user })
            })
            .catch(r => r.json().then(e => dispatch({ type: 'FAILED_LOGIN', payload: e.message })))
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
                    response.json().then(response => {
                        dispatch({
                            type: "SET_CURRENT_USER",
                            payload: response.data
                        });
                    });
                }
            })
            .catch(r => r.json().then(e => console.log(e)))
    }
}