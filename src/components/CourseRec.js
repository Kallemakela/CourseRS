import React from 'react'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'

function CourseRec(props) {
  const { index, name, code, mIndex } = props
  const cssClasses = `p-2 m-3 course`
  return (
    <Card className={cssClasses}>
      <Accordion.Toggle as={Card.Header} eventKey={`${index}`}>
        <div className="d-flex">
        <div className="p-2">
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>{code}</Card.Subtitle>
        </div>
          <div className="ml-auto p-2">Suitability: {mIndex.toFixed(0)}%</div>
        </div>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={`${index}`}>
        <Card.Body>
        <div className="d-flex">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare quam nisl, id accumsan quam consectetur sit amet. In et felis vel augue venenatis sollicitudin. Vivamus tincidunt elit quis nibh volutpat consectetur. Etiam non suscipit erat. Nulla suscipit mauris nec faucibus sodales. Aliquam tincidunt neque a leo eleifend, sed auctor nisl condimentum. Fusce justo nibh, condimentum vitae diam in, lacinia volutpat magna. Suspendisse euismod vulputate leo eget ultricies.
          </div>
        </div>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  )
}

export default CourseRec