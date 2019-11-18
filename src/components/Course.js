import React from 'react'
import Card from 'react-bootstrap/Card'

function Course(props) {
  const { name, code, completed, handleClick } = props
  const cssClasses = `p-2 m-3 course ${completed ? 'completed' : ''}`
  return (
    <Card
      className={cssClasses}
      onClick={() => handleClick(code)}
    >
      <div className='d-flex' id={code}>
        <div className="p-2">
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>{code}</Card.Subtitle>
        </div>
        <div className="ml-auto d-flex p-2">
          <input
            type='checkbox'
            className='checkbox'
            checked={completed}
            readOnly
          />
        </div>
      </div>
    </Card>
  )
}

export default Course