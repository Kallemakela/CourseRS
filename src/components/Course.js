import React from 'react'
import Card from 'react-bootstrap/Card'
import FormCheck from 'react-bootstrap/FormCheck'

function Course(props) {
  const { name, code, completed, handleClick } = props
  const cssClasses = `p-2 m-1 course ${completed ? 'completed' : ''}`
  return (
    <Card className={cssClasses}>
      <div class='d-flex' onClick={handleClick} id={code}>
        <div class="p-2">
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>{code}</Card.Subtitle>
        </div>
        <div class="ml-auto p-2">
          <FormCheck
            checked={completed}
          />
        </div>
      </div>
    </Card>
  )
}

export default Course