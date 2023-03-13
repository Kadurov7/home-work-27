import axiosInstance from '../config/axiosInstence'

export const postMealRequest = (newMeal, token) => {
    return axiosInstance.post('/foods', newMeal, {
        headers: { Authorization: token },
    })
}

export const getMealRequest = () => {
    return axiosInstance.get('/foods')
}

export const deleteMealRequest = (token, id) => {
    return axiosInstance.delete(`/foods/${id}`, {
        headers: { Authorization: token },
    })
}

export const updateMealRequest = (token, data) => {
    return axiosInstance.put(`/foods/${data.id}`, data.editData, {
        headers: { Authorization: token },
    })
}
