import { all, call, put, takeLatest } from 'redux-saga/effects'
import movieService from '../services/movies.service'
import {
  getMoviesAction,
  getMoviesActionFailed,
  getMoviesActionSuccess
} from '../actions/movies.actions'

function* getMovies() {
  try {
    const { data } = yield call(movieService.getMovies)
    yield put(getMoviesActionSuccess(data))
  } catch (error) {
    yield put(getMoviesActionFailed(error))
  }
}

export default function* root() {
  yield all([
    takeLatest(getMoviesAction.toString(), getMovies),
  ])
}
