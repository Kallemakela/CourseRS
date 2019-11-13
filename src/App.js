import React, { Component } from 'react';
import './App.css';
import Course from './components/Course'
// TODO separate imports for bootstrap
import { Button, ButtonGroup, Container, Col, Row, Tabs, Tab } from 'react-bootstrap'

class App extends Component {

  state = {
    completedCourses: [
      {
        name: 'o1',
        code: 'CS-1001',
        completed: true
      },
      {
        name: 'o2',
        code: 'CS-1002',
        completed: false,
      }
    ],
    recommendedCourses: [
      {
        name: 'o1',
        code: 'CS-1001',
      },
      {
        name: 'o2',
        code: 'CS-1002',
      }
    ],
  }

  handleClick = (e) => {
    const clickedCourse = e.target.name
    this.setState(prevState => {
      const completedCourses = prevState.completedCourses.map(course => {
        if (course.code === clickedCourse) {
          course.completed = !course.completed
        }
        return course
      })
      return { completedCourses }
    })
  }

  render() {
    const { completedCourses, recommendedCourses } = this.state
    return (
      <div className="App">
        <Tabs>
          <Tab eventKey="completed" title="Completed">
            <div>
              {completedCourses.map(c => (
                <Course
                  key={c.code}
                  name={c.name}
                  code={c.code}
                  completed={c.completed}
                  handleClick={this.handleClick}
                />
              ))}
            </div>
          </Tab>
          <Tab eventKey="recommendations" title="Recommendations">
            <div className='mt-1'>
              {recommendedCourses.map(c => (
                <Course
                  key={c.code}
                  name={c.name}
                  code={c.code}
                  mIndex={c.mIndex}  
                />
              ))}
            </div>
          </Tab>
        </Tabs>
     </div>
    );
  }
}

export default App;
