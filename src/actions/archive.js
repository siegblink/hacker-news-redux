import { STORY_ARCHIVE } from '../constants/actionTypes'

export function doArchiveStory(id) {
  return {
    type: STORY_ARCHIVE,
    id,
  }
}
