import { call, put } from 'redux-saga/effects'
import { doAddStories } from '../actions/story'
import { fetchStories } from '../api/story'

export default function* handleFetchStories(action) {
  const { query } = action
  const result = yield call(fetchStories, query)
  yield put(doAddStories(result.hits))
}
