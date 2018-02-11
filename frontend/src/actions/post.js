import axios from 'axios';
import * as TYPES from './types'
import { ROOT_URL, AUTH_TOKEN } from './constants'
import newGuid from '../utils/newGuid'

axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const addPost = (data, parentId) => dispatch => {
    data[id] = newGuid()
    data[parentId] = parentId
    data[timestamp] = Date.now()

    return axios.post(`${ROOT_URL}/posts`, data)
        .then(res =>
            dispatch({
                type: TYPES.ADD_POST,
                payload: res.data
            }))
}

export const deletePost = (id) = dispatch =>
    axios.delete(`${ROOT_URL}/posts/${id}`)
        .then(res =>
            dispatch({
                type: TYPES.DELETE_POST,
                payload: res.data
            }))


export const editPost = (id, data) = dispatch =>
    axios.put(`${ROOT_URL}/posts/${id}`, data)
        .then(res =>
            dispatch({
                type: TYPES.EDIT_POST,
                payload: res.data
            }))

export const getPost = (id) => dispatch =>
    axios.get(`${ROOT_URL}/posts/${id}`)
        .then(res =>
            dispatch({
                type: TYPES.GET_POST,
                payload: res.data
            }))

export const getPosts = () => dispatch =>
    axios.get(`${ROOT_URL}/posts`)
        .then(res =>
            dispatch({
                type: TYPES.GET_POSTS,
                payload: res.data
            }))

export const getPostByCategory = (category) => dispatch =>
    axios.get(`${ROOT_URL}/${category}/posts`)
        .then(res =>
            dispatch({
                type: TYPES.GET_POST_BY_CATEGORY,
                payload: res.data
            }))

export const votePost = (id, option) = dispatch =>
    axios.post(`${ROOT_URL}/posts/${id}`, { option: option })
        .then(res =>
            dispatch({
                type: TYPES.VOTE_POST,
                payload: res.data
            }))