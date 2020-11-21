import { createAction } from 'redux-actions'

export const getMoviesAction = createAction('GET_MOVIES_ACTION')
export const getMoviesActionSuccess = createAction('GET_MOVIES_ACTION_SUCCESS')
export const getMoviesActionFailed = createAction('GET_MOVIES_ACTION_FAILED')