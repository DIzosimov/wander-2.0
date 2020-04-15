import { combineReducers } from 'redux'

import auth from './features/auth/reducer'
import blogPosts from './features/blogPosts/reducer'

const reducers = combineReducers({
  auth,
  blogPosts
})

export default reducers