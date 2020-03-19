import React from 'react'
import './App.css'

import Stories from './Stories'
import SearchStories from './SearchStories'

export default function App() {
  return (
    <div className='app'>
      <SearchStories />
      <Stories />
    </div>
  )
}
