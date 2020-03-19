export const addPlant = (plant) => {
    return (dispatch) => {
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
            .catch(r => r.json().then(e => console.log(e)))
    }
}

export const updatePlant = (plant) => {
    console.log('INSIDE UPDATE PLANT plant.js', plant)
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/plants${plant.id}`, {
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
                            dispatch({
                                type: "UPDATE_PLANT",
                                payload: response
                            })
                        })
                }
            })
            .catch(r => r.json().then(e => console.log(e)))
    }
}