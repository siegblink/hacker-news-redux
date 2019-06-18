import { STORIES_ADD, STORIES_FETCH_ERROR } from '../constants/actionTypes'

const INITIAL_STATE = {
  stories: [],
  error: null,
}

export default function storyReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case STORIES_ADD:
      return { ...state, stories: action.stories, error: null }
    case STORIES_FETCH_ERROR:
      return { ...state, error: action.error }
    default:
      return state
  }
}
