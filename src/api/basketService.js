import axiosInstance from '../config/axiosInstence'

export const getBasketReq = () => {
    return axiosInstance.get('/basket')
}

export const addToBasketReq = (newItem) => {
    return axiosInstance.post(`/foods/${newItem.id}/addToBasket`, {
        amount: newItem.amount,
    })
}

export const updateBasketItemReq = (id, basketAmount) => {
    return axiosInstance.put(`/basketItem/${id}/update`, {
        amount: basketAmount,
    })
}
export const deleteBasketItemReq = (id) => {
    return axiosInstance.delete(`/basketItem/${id}/delete`)
}
