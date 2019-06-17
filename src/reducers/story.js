import { STORIES_ADD } from '../constants/actionTypes'

const INITIAL_STATE = []

export default function storyReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case STORIES_ADD:
      return action.stories
    default:
      return state
  }
}
