import React, { Component } from 'react';
import './App.css';
import Course from './components/Course'
class App extends Component {

  state = {
    search: '',
    courses: [
      {
        name: 'Everything else',
        mIndex: 100,
      },
      {
        name: 'Sci-project',
        mIndex: 0,
      }
    ],
  }

  search = () => {
    this.setState(prevState => {
      const courses = prevState.courses.filter(c => {
        return c.name.toLowerCase().includes(prevState.search.toLowerCase())
      })
      return { courses }
    })
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.search()
    }
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    const { courses, search } = this.state
    return (
      <div className="App">
        <div className='topbar'>
          <input
            type='search'
            value={search}
            name='search'
            onChange={this.onChange}
            onKeyPress={this.handleKeyPress}
          ></input>
          <button
            type='button'
          >
          Login
          </button>
          </div>
        {courses.map(c => (
          <Course
            key={c.name}
            name={c.name}
            mIndex={c.mIndex}  
          />
        ))}
      </div>
    );
  }
}

export default App;
