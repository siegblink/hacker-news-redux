import { STORY_ARCHIVE } from '../constants/actionTypes'

const INITIAL_STATE = []

export default function archiveReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case STORY_ARCHIVE:
      return [...state, action.id]
    default:
      return state
  }
}
