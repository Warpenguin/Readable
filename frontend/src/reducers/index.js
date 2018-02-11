
import { combineReducers } from 'redux';
import Category from './category'
import Comment from './comment'
import Post from './post'

export default combineReducers({
    category: Category,
    comment: Comment,
    post: Post
});