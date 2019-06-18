export function getFetchError({ storyState }) {
  return storyState.error
}

export function getReadableStories({ storyState, archiveState }) {
  return storyState.stories.filter(isNotArchived(archiveState))
}

function isNotArchived(archivedIds) {
  return function(story) {
    return archivedIds.indexOf(story.objectID) === -1
  }
}
