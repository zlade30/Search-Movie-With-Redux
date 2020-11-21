import { combineReducers } from 'redux'

import movieReducer from './movie.reducer'

const reducers = combineReducers({
  movie: movieReducer
})

export default reducers