import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function CourseRec(props) {
  const { index, name, code, description, oodiLink, myCoLink, mIndex } = props
  const cssClasses = `p-2 m-3 course`
  return (
    <Card className={cssClasses}>
      <Accordion.Toggle as={Card.Header} eventKey={`${index}`}>
        <div className="d-flex">
        <div className="p-2">
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>{code}</Card.Subtitle>
        </div>
          <div className="d-flex ml-auto p-2">
            <div className='align-self-center'>
            {mIndex.toFixed(0)}%
            </div>
          </div>
        </div>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={`${index}`}>
        <Card.Body>
        <div className="d-flex">
          <div>
            {description}
            <Row className='mt-4'>
              <Col sm={6} className='d-flex justify-content-center oodi-div'>
                <a href={oodiLink} className="btn btn-dark w-100" role="button">WebOodi</a>
              </Col>
              <Col sm={6} className='d-flex justify-content-center'>
                <a href={myCoLink} className="btn btn-dark w-100" role="button">MyCourses</a>
              </Col>
            </Row>
          </div>
        </div>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  )
}

export default CourseRec