import { handleActions } from 'redux-actions'
import {
  getMoviesAction,
  getMoviesActionFailed,
  getMoviesActionSuccess
} from '../actions/movies.actions'

const defaultState = {
  movies: []
}

const reducer = handleActions(
  {
    [getMoviesAction]: state => {
      return {
        ...state,
        status: {
          submitted: true,
          success: false,
          loading: true,
          type: 'getMovies'
        }
      }
    },
    [getMoviesActionSuccess]: (state, { payload }) => {
      return {
        ...state,
        movies: payload,
        status: {
          message: payload,
          submitted: true,
          success: false,
          loading: false,
          type: 'getMovies'
        }
      }
    },
    [getMoviesActionFailed]: (state, { payload }) => {
      return {
        ...state,
        status: {
          message: payload,
          submitted: true,
          success: true,
          loading: false,
          type: 'getMovies'
        }
      }
    }
  },
  defaultState
)

export default reducer
