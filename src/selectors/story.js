export function isNotArchived(archivedIds) {
  return function(story) {
    return archivedIds.indexOf(story.objectID) === -1
  }
}

export function getReadableStories({ storyState, archiveState }) {
  return storyState.filter(isNotArchived(archiveState))
}
