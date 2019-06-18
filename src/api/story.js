const HN_BASE_URL = 'http://hn.algolia.com/api/v1/search?query='

export function fetchStories(query) {
  return fetch(HN_BASE_URL + query).then(response => response.json())
}
