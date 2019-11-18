import React, { Component } from 'react';
import './App.css';
import Course from './components/Course'
import CourseRec from './components/CourseRec'
import { recommendCourses, getCourses } from'./db'
// TODO separate imports for bootstrap
import { Button, ButtonGroup, Container, Col, Row, Tabs, Tab, Accordion } from 'react-bootstrap'

class App extends Component {

  state = {
    completedCourses: getCourses(''),
    recommendedCourses: [],
  }
  
  handleClick = (e) => {
    const clickedCourse = e.target.lang
    this.setState(prevState => {
      const completedCourses = prevState.completedCourses.map(course => {
        if (course.code === clickedCourse) {
          course.completed = !course.completed
        }
        return course
      })
      this.setState( {recommendedCourses: recommendCourses(this.state.completedCourses),})
      return { completedCourses }
    })
  }
  componentDidMount(){
      this.setState( {recommendedCourses: recommendCourses(this.state.completedCourses),})
  }

  render() {
    const { completedCourses, recommendedCourses } = this.state
    return (
      <div className="App">
        <Tabs defaultActiveKey='completed'>
          <Tab eventKey="completed" title="Completed">
            <div>
              {completedCourses.map(c => (
                <Course
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
              <Accordion>
                {recommendedCourses.map((c, i) => (
                  <CourseRec
                    index={i}
                    name={c.name}
                    code={c.code}
                    mIndex={c.mIndex}  
                  />
                ))}
              </Accordion>
           </div>
          </Tab>
        </Tabs>
     </div>

    );
  }
}

export default App;
