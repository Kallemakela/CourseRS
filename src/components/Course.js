import React from 'react'
import Card from 'react-bootstrap/Card'
import FormCheck from 'react-bootstrap/FormCheck'

export default function Course(props) {
  const { name, code, completed, handleClick } = props
  const cssClasses = `p-2 m-1 course ${completed ? 'completed' : ''}`
  return (
    <Card className={cssClasses}>
      <div>
        <span>
          <Card.Title>
            {name}
          </Card.Title>
          <Card.Subtitle>{code}</Card.Subtitle>
        </span>
        <span>
          <FormCheck
            name={code}
            checked={completed}
            onClick={handleClick}
          />
        </span>
      </div>
    </Card>
  )
}
