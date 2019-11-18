const math = require('mathjs')
// const fs = require('fs');

const PATH = './data/weights.csv'

// weights.csv pasted here because we can't read local files in browser
const mockCsvStr = `,CS-C3160; Data Science,CS-E3210; Machine Learning: Basic Principles,CS-A1110; Programming 1,CS-C3170; Web Software Development,CS-E4800; Artificial Intelligence,UWAS-C0036; Game Design and Production,DOM-E5089; Games Now!,MS-A0309; Differential and integral calculus 3,MS-C1343; Linear Algebra,MS-C1420; Fourier analysis,TU-C9270; Introduction to Networks,TU-C9260; Studio Course of Industrial Engineering and Management,TU-C1030; Managerial accounting and finance for decision-makers,TU-A1150; Philosophy and Systems Thinking,TU-A1140; Leading and Understanding Oneself,ELEC-A4010; Electrical engineering workshop,AAN-C2011; ADD basics,ENG-A1005; Futures forum in Engineering,NBE-C3001; Brain ABC,ELEC-A4930; Astronomical View of the World 
0,0.93,0.94,0.62,0.56,0.59,0.66,0.63,0.53,0.43,0.44,0.42,0.32,0.37,0.29,0.18,0.15,0.0,0.03,0.0,0.0
1,0.86,0.7,0.69,0.88,0.7,0.77,0.75,0.64,0.54,0.45,0.33,0.22,0.32,0.12,0.21,0.1,0.1,0.19,0.03,0.0
2,0.78,0.88,0.71,0.85,0.75,0.6,0.78,0.65,0.62,0.44,0.59,0.45,0.43,0.19,0.33,0.25,0.3,0.1,0.13,0.09
3,0.73,0.76,0.84,0.76,0.93,0.81,0.58,0.74,0.5,0.42,0.45,0.58,0.45,0.43,0.45,0.25,0.27,0.08,0.24,0.05
4,0.54,0.77,0.61,0.78,0.78,0.95,0.64,0.71,0.6,0.57,0.68,0.55,0.51,0.31,0.33,0.25,0.22,0.2,0.29,0.06
5,0.66,0.65,0.59,0.8,0.76,0.97,0.71,0.67,0.82,0.61,0.68,0.48,0.46,0.48,0.46,0.25,0.25,0.3,0.09,0.01
6,0.59,0.59,0.51,0.77,0.8,0.9,0.88,0.94,0.64,0.81,0.76,0.61,0.51,0.52,0.32,0.32,0.37,0.44,0.22,0.29
7,0.53,0.5,0.52,0.66,0.62,0.9,0.81,0.86,0.88,0.6,0.72,0.62,0.74,0.54,0.58,0.45,0.44,0.38,0.26,0.29
8,0.58,0.38,0.41,0.66,0.74,0.77,0.69,0.85,0.93,0.86,0.88,0.65,0.58,0.55,0.59,0.39,0.35,0.36,0.49,0.31
9,0.52,0.55,0.57,0.43,0.56,0.75,0.71,0.68,0.72,0.89,0.79,0.7,0.73,0.59,0.53,0.47,0.52,0.36,0.5,0.26
10,0.21,0.37,0.36,0.35,0.5,0.56,0.52,0.77,0.64,0.75,0.76,0.84,0.68,0.69,0.73,0.48,0.53,0.62,0.54,0.31
11,0.33,0.46,0.31,0.39,0.55,0.44,0.55,0.52,0.59,0.71,0.74,0.99,0.81,0.73,0.81,0.53,0.49,0.46,0.59,0.37
12,0.32,0.21,0.27,0.34,0.57,0.64,0.66,0.55,0.58,0.64,0.83,0.95,0.8,0.86,0.65,0.66,0.51,0.74,0.62,0.47
13,0.25,0.34,0.41,0.22,0.41,0.57,0.51,0.53,0.61,0.53,0.84,0.74,0.87,0.77,0.88,0.86,0.67,0.52,0.58,0.49
14,0.27,0.09,0.19,0.17,0.32,0.3,0.5,0.37,0.57,0.63,0.71,0.6,0.86,0.91,0.74,0.7,0.65,0.65,0.56,0.52
15,0.16,0.24,0.15,0.3,0.25,0.35,0.5,0.37,0.41,0.54,0.72,0.72,0.83,0.75,0.74,0.81,0.72,0.7,0.76,0.56
16,0.16,0.01,0.15,0.11,0.26,0.2,0.3,0.34,0.43,0.5,0.67,0.6,0.79,0.61,0.84,0.8,0.9,0.76,0.62,0.83
17,0.1,0.0,0.2,0.0,0.34,0.29,0.37,0.4,0.28,0.44,0.48,0.41,0.74,0.74,0.63,0.65,0.83,0.77,0.66,0.79
18,0.0,0.0,0.18,0.06,0.23,0.09,0.11,0.17,0.37,0.36,0.51,0.64,0.56,0.48,0.7,0.7,0.78,0.9,0.94,0.69
19,0.0,0.0,0.0,0.08,0.0,0.1,0.29,0.29,0.42,0.28,0.33,0.52,0.46,0.53,0.47,0.63,0.7,0.84,0.68,0.74
`

const getRows = (path) => {
  // Uncomment to read from weights.csv (can't do in browser)
  // const csvString = fs.readFileSync(path, {encoding: 'utf8'})
  const csvString = mockCsvStr 
  return csvString.split('\n').slice(0,-1)
}

const getWeights = (path) => {
  const rows = getRows(path).slice(1)
  const W = []
  for (let row of rows) {
    const entries = row.split(',').slice(1).map(n => Number(n))
    W.push(entries)
  }
  return W
}

export const getCourses = (path) => {
  const courses = getRows(path)[0].slice(1).split(',')
  return courses.map((courseString, index) => {
    const [code, name] = courseString.split(';')
    return {
      index,
      code,
      name,
      completed: false,
    }
  })
}

export const recommendCourses = (courseList) => {
  const W = getWeights(PATH)
  const completedCourses = []
  const courseNames = []
  for (let i = 0; i< courseList.length;i++){
    completedCourses.push(courseList[i].completed)
    courseNames.push(courseList[i].name)
  }
  const completedLength = Math.max(1, completedCourses.filter(Boolean).length)
  const courseRank = (courses, W) => {
    const rankedCourses = math.multiply(courses, W)
    const filtered = []
    for (let i = 0; i < courses.length; i++) {
      if (!courses[i]) {
        filtered.push({
          name: courseNames[i],
          code:courseList[i].code,
          mIndex: rankedCourses[i] / completedLength * 100,
          // mIndex: rankedCourses[i]/l + (0.99 - rankedCourses[i]/l) * (1/4 * (Math.log(Math.max(0.019, rankedCourses[i]/l))) + 1)
        })
      }
    }
    return filtered.sort((a, b) => b.mIndex-a.mIndex)
  }
  return courseRank(completedCourses, W)
}