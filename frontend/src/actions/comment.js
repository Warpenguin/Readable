import axios from 'axios';
import * as TYPES from './types'
import { ROOT_URL, AUTH_TOKEN } from './constants'
import newGuid from '../utils/newGuid'

axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const addComment = (data, parentId) => dispatch => {
    data[id] = newGuid()
    data[parentId] = parentId
    data[timestamp] = Date.now()

    return axios.post(`${ROOT_URL}/comments`, data)
        .then(res =>
            dispatch({
                type: TYPES.ADD_COMMENT,
                payload: res.data
            }))
}

export const deleteComment = (id) = dispatch =>
    axios.delete(`${ROOT_URL}/comments/${id}`)
        .then(res =>
            dispatch({
                type: TYPES.DELETE_COMMENT,
                payload: res.data
            }))


export const editComment = (id, data) = dispatch =>
    axios.put(`${ROOT_URL}/comments/${id}`, data)
        .then(res =>
            dispatch({
                type: TYPES.EDIT_COMMENT,
                payload: res.data
            }))

export const getComment = (id) => dispatch =>
    axios.get(`${ROOT_URL}/comments/${id}`)
        .then(res =>
            dispatch({
                type: TYPES.GET_COMMENT,
                payload: res.data
            }))

export const voteComment = (id, option) = dispatch =>
    axios.post(`${ROOT_URL}/comments/${id}`, { option: option })
        .then(res =>
            dispatch({
                type: TYPES.VOTE_COMMENT,
                payload: res.data
            }))