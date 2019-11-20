import React, { Component } from 'react';
import './App.css';
import Course from './components/Course'
import CourseRec from './components/CourseRec'
import { recommendCourses, getCourses } from'./db'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Accordion from 'react-bootstrap/Accordion'

class App extends Component {

  state = {
    courses: [],
    recommendedCourses: [],
  }
  
  handleClick = (clickedCourse) => {
    this.setState(prevState => {
      const courses = prevState.courses.map(course => {
        if (course.code === clickedCourse) {
          course.completed = !course.completed
        }
        return course
      })
      return {
        courses,
        recommendedCourses: recommendCourses(courses)
      }
    })
  }

  componentDidMount() {
    const courses = getCourses('./data/weights.csv')
    this.setState({
      courses,
      recommendedCourses: recommendCourses(courses),
    })
  }

  render() {
    const { courses, recommendedCourses } = this.state
    return (
      <div className="App">
        <Tabs defaultActiveKey='completed'>
          <Tab eventKey="completed" title="Completed">
            <div>
              {courses.map(c => (
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
              <Accordion>
                {recommendedCourses.map((c, i) => (
                  <CourseRec
                    index={i}
                    key={c.code}
                    name={c.name}
                    description={c.description}
                    oodiLink={c.oodiLink}
                    myCoLink={c.myCoLink}
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
