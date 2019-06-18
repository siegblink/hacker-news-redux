import { STORIES_ADD, STORIES_FETCH } from '../constants/actionTypes'

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
