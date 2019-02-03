import React from 'react'

export default (props) => {
  const { id } = props.match.params
  console.log(id)
  return (
    <div>
      {`sup  ${id}`}
    </div>
  )
}
