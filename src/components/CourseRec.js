import React from 'react'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'

function CourseRec(props) {
  const { index, name, code, mIndex, completed } = props
  const cssClasses = `p-2 m-1 course ${completed ? 'completed' : ''}    `
  return (
    <Card className={cssClasses}>
      <Accordion.Toggle as={Card.Header} eventKey={`${index}`}>
        <div class="d-flex">
          <div class="p-2">{code}</div>
          <div class="p-2">{name}</div>
          <div class="ml-auto p-2">Suitability: {mIndex}</div>
        </div>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={`${index}`}>
        <Card.Body>
        <div class="d-flex">
          <div>
            The course presents a range of central AI techniques and  provides the students with an extensive toolbox for solving problems  in practice. For applications that require high degree of adaptation,  specific techniques such as (deep) machine learning, reinforcement  learning, and graphical models are included. These methods are  instrumental for decision under uncertainty. For the purposes of  knowledge representation and reasoning, different logical  representations such as formulas and rules are covered. These representations establish the foundations for  declarative problem solving and enable the use of state-of-the-art solver technology to search for solutions. The course also encourages  the students to combine the logical and machine learning perspectives  when solving future problems.
          </div>
        </div>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  )
}

export default CourseRec