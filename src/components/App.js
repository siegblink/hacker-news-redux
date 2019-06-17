import React from 'react'
import './App.css'

import Stories from './Stories'

export default function App({ stories, onArchive }) {
  return (
    <div className='app'>
      <Stories />
    </div>
  )
}
