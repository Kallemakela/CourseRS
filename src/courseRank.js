const math = require('mathjs')

const W = [[0, 1, 0.5],
           [0, 0, 1], 
           [0.5, 1, 0]]

const completedCourses = [1, 1, 0]
const courseNames = ['o1', 'o2', 'trak']


const courseRank = (courses, W) => {
  const rankedCourses = math.multiply(courses, W)
  const filtered = {}
  for (let i = 0; i < courses.length; i++) {
    if (courses[i] === 0) {
      filtered[courseNames[i]] = rankedCourses[i]
    }
  }
  return filtered
}

console.log(courseRank(completedCourses, W))