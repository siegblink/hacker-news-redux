import React, { useState } from 'react'
import { connect } from 'react-redux'
import { doFetchStories } from '../actions/story'

function Button({ type, children }) {
  return <button type={type}>{children}</button>
}

function SearchStories(props) {
  const [state, setState] = useState({ query: '' })

  function onSubmit(event) {
    const { query } = state
    if (query) {
      props.onFetchStories(query)
      setState({ query: '' })
    }
    event.preventDefault()
  }

  function onChange(event) {
    const { value } = event.target
    setState({ query: value })
  }

  return (
    <form onSubmit={onSubmit}>
      <input type='text' value={state.query} onChange={onChange} />
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

export default connect(
  null,
  mapDispatchToProps
)(SearchStories)
