export const addPlant = (newplant, userId) => {
    return (dispatch) => {
        console.log("current user", userId)
        const plant = { newplant, userId }
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/plants`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ plant })
        })
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then(response => {
                            console.log('INSIDE ADD PLANT', response)
                            dispatch({
                                type: "ADD_PLANT",
                                payload: response
                            });
                        });
                }
            })
            .catch(e => console.log(e))
    }
}

export const updatePlant = (plant) => {
    console.log('INSIDE UPDATE PLANT plant.js', JSON.stringify({ plant }))
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/plants/${plant.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ plant })
        })
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then(response => {
                            console.log('INSIDE UPDATE plant.js', response)
                            dispatch({
                                type: "UPDATE_PLANT",
                                payload: response.data
                            })
                            return response
                        })
                }
            })
            .catch(e => console.log(e))
    }
}

export const deletePlant = (id) => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/plants/${id}`, {
            method: 'DELETE'
        }).then(response => response.json())
            .then(response => {
                console.log('INSIDE DELETE plant.js response', response)
                dispatch({
                    type: "DELETE_PLANT",
                    payload: response.data
                })
                return response
            })
            .catch(e => console.log(e))
    }
}

export const fetchPlants = (user) => {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/users/${user.id}`)
            .then(res => res.json())
            .then(res => {
                console.log('FETCH PLANTS plant.js', res.plant_info.plants)
                if (res.ok) {
                    dispatch({
                        type: "FETCH_PLANTS",
                        payload: res.plant_info.plants
                    })
                    return res
                }
            })
            .catch(e => console.log(e))
    }
}