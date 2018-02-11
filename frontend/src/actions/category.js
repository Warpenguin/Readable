import axios from 'axios';
import * as TYPES from './types'
import { ROOT_URL, AUTH_TOKEN } from './constants'

axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const getCategories = dispatch =>
    axios.get(`${ROOT_URL}/categories`)
        .then(res => dispatch({
            type: TYPES.GET_CATEGORIES,
            payload: res.data
        }))