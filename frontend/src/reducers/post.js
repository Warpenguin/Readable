import * as TYPES from '../actions/types'

export default (state = { }, action) => {
    switch (TYPES) {
        case TYPES.ADD_POST:
        case TYPES.DELETE_POST:
        case TYPES.EDIT_POST:
        case TYPES.GET_POST:
        case TYPES.GET_POST_BY_CATEGORY:
        case TYPES.GET_POSTS:
        case TYPES.VOTE_POST:
        default:
            return state;
    }
}