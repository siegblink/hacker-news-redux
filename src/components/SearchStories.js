import React, { useState } from 'react'
import { connect } from 'react-redux'
import { doFetchStories } from '../actions/story'

const inputStyles = {
  width: '300px',
  fontSize: '16px',
}
const buttonStyles = {
  fontSize: '16px',
  paddingLeft: '20px',
  paddingRight: '20px',
  borderRadius: '3px',
  background: '#c0c0c0',
  color: '#333'
}

function Button({ type, children }) {
  return (
    <button type={type} style={buttonStyles}>
      {children}
    </button>
  )
}

function SearchStories(props) {
  const [state, setState] = useState({ query: '' })

  function onSubmit(event) {
    event.preventDefault()
    const { query } = state
    if (query) {
      props.onFetchStories(query)
      setState({ query: '' })
    }
  }

  function onChange(event) {
    const { value } = event.target
    setState({ query: value })
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        value={state.query}
        onChange={onChange}
        style={inputStyles}
      />
      <Button type='submit'>Search</Button>
    </form>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchStories: function(query) {
      return dispatch(doFetchStories(query))
    },
  }
}

export default connect(null, mapDispatchToProps)(SearchStories)
