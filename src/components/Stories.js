import React from 'react'
import './Stories.css'
import Story from './Story'

import { connect } from 'react-redux'
import { getReadableStories, getFetchError } from '../selectors/story'

const COLUMNS = {
  title: {
    label: 'Title',
    width: '40%',
  },
  author: {
    label: 'Author',
    width: '30%',
  },
  comments: {
    label: 'Comments',
    width: '10%',
  },
  points: {
    label: 'Points',
    width: '10%',
  },
  archive: {
    width: '10%',
  },
}

function Stories({ stories, error }) {
  return (
    <div className='stories'>
      <StoriesHeader columns={COLUMNS} />

      {error && <p className='error'>Something went wrong ...</p>}

      {(stories || []).map(story => (
        <Story key={story.objectID} story={story} columns={COLUMNS} />
      ))}
    </div>
  )
}

function StoriesHeader({ columns }) {
  return (
    <div className='stories-header'>
      {Object.keys(columns).map(key => (
        <span key={key} style={{ width: columns[key].width }}>
          {columns[key].label}
        </span>
      ))}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    stories: getReadableStories(state),
    error: getFetchError(state),
  }
}

export default connect(mapStateToProps)(Stories)
