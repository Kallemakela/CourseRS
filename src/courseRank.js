const math = require('mathjs')
// const fs = require('fs');

const PATH = './data/weights.csv'

// weights.csv pasted here because we can't read local files in browser
const mockCsvStr = `,0,1,2,3
0,0.46,0.05,0.27,0.52
1,0.17,0.4,0.01,0.29
2,0.15,0.17,0.47,0.12
3,0.37,0.78,0.39,0.41
`

const getData = (path) => {
  // Uncomment to read from weights.csv (can't do in browser)
  // const csvString = fs.readFileSync(path, {encoding: 'utf8'})
  const csvString = mockCsvStr 
  const rows = csvString.split('\n').slice(0,-1)
  const courseNames = rows.shift().slice(1)
  const W = []
  for (let row of rows) {
    const entries = row.split(',').slice(1).map(n => Number(n))
    W.push(entries)
  }
  return W
}

export default function recommendCourses(courseList) {
  const W = getData(PATH)
  const completedCourses = []
  const courseNames = []
  for (let i = 0; i< courseList.length;i++){
    completedCourses.push(courseList[i].completed)
    courseNames.push(courseList[i].name)
  }
  const courseRank = (courses, W) => {
    const rankedCourses = math.multiply(courses, W)
    const filtered = []
    for (let i = 0; i < courses.length; i++) {
      if (!courses[i]) {
        filtered.push({name: courseNames[i], code:courseList[i].code, mIndex:rankedCourses[i]})
      }
    }
    return filtered.sort((a, b) => b.mIndex-a.mIndex)
  }
  return courseRank(completedCourses, W)
}