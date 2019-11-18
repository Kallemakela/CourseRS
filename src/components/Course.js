import React from 'react'
import Card from 'react-bootstrap/Card'
import FormCheck from 'react-bootstrap/FormCheck'

function Course(props) {
  const { name, code, completed, handleClick } = props
  const cssClasses = `p-2 m-3 course ${completed ? 'completed' : ''}`
  return (
    <Card
      className={cssClasses}
      onClick={handleClick}
    >
      <div
        className='d-flex'
        lang={code}
      >
        <div className="p-2"
        >
          <Card.Title
            lang={code}
          >
            {name}
          </Card.Title>
          <Card.Subtitle
            lang={code}
          >
            {code}
          </Card.Subtitle>
        </div>
        <div className="ml-auto p-2">
          <FormCheck
            checked={completed}
            lang={code}
          />
        </div>
      </div>
    </Card>
  )
}

export default Course