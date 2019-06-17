import React from 'react'

export default function ButtonInline({ onClick, type = 'button', children }) {
  return (
    <Button type={type} className='button-inline' onClick={onClick}>
      {children}
    </Button>
  )
}

function Button({ onClick, className, type = 'button', children }) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  )
}
