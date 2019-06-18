import {
  STORIES_ADD,
  STORIES_FETCH,
  STORIES_FETCH_ERROR,
} from '../constants/actionTypes'

export function doAddStories(stories) {
  return {
    type: STORIES_ADD,
    stories,
  }
}

export function doFetchStories(query) {
  return {
    type: STORIES_FETCH,
    query,
  }
}

export function doFetchErrorStories(error) {
  return {
    type: STORIES_FETCH_ERROR,
    error,
  }
}
