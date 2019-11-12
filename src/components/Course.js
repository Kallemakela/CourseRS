import React from 'react'

export default function Course(props) {
  const { name, mIndex } = props
  return (
    <div className='course'>
      <span className='name'>{name}</span>
      <span className='mIndex'>{mIndex}</span>
    </div>
  )
}
