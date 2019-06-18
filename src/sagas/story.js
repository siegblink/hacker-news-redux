import { call, put } from 'redux-saga/effects'
import { doAddStories } from '../actions/story'

const HN_BASE_URL = 'http://hn.algolia.com/api/v1/search?query='

function fetchStories(query) {
  return fetch(HN_BASE_URL + query).then(response => response.json())
}

export default function* handleFetchStories(action) {
  const { query } = action
  const result = yield call(fetchStories, query)
  yield put(doAddStories(result.hits))
}
