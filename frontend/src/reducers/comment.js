import * as TYPES from '../actions/types'

export default (state = { }, action) => {
    switch (TYPES) {
        case TYPES.ADD_COMMENT:
        case TYPES.DELETE_COMMENT:
        case TYPES.EDIT_COMMENT:
        case TYPES.GET_COMMENT:
        case TYPES.VOTE_COMMENT:
        default:
            return state;
    }
}