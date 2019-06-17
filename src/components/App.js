import React from 'react'
import './App.css'

import Stories from './Stories'
import SearchStories from './SearchStories'

export default function App({ stories, onArchive }) {
  return (
    <div className='app'>
      <div className='interactions'>
        <SearchStories />
      </div>
      <Stories />
    </div>
  )
}
