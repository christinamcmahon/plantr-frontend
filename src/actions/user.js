export const loginUser = (username, password) => {
    console.log('INSIDE loginUser before return', process.env.REACT_APP_API_ENDPOINT)
    // debugger
    return (dispatch) => {
        console.log('INSIDE loginUser AFTER return', username)
        console.log(password)
        dispatch({ type: "AUTHENTICATING_USER" })
        fetch(`http://localhost:3000/api/v1/login`, {
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
                // dispatch(setCurrentUser(JSONResponse.user))
            })
            .catch(r => r.json().then(e => dispatch({ type: 'FAILED_LOGIN', payload: e.message })))
        // .then((jsonResponse) => {
        //     localStorage.setItem('jwt', jsonResponse.jwt)
        //     dispatch(setCurrentUser(jsonResponse.user))
        // })
        console.log('BELOW FETCH')
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