import { all, fork } from 'redux-saga/effects'

import movie from './movie.saga'

export default function* root() {
  yield all([
    fork(movie)
  ])
}
