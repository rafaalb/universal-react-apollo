import React from 'react'

export default (props) => {
  const { id } = props.match.params
  return (
    <div>
      {`sup  ${id}`}
    </div>
  )
}
