const math = require('mathjs')
// const fs = require('fs');

const PATH = './data/weights.csv'

// weights.csv pasted here because we can't read local files in browser
const mockCsvStr = `,UWAS-C0036; Game Design and Production,DOM-E5089; Games Now!,CS-A1110; Programming 1,CS-C3170; Web Software Development,CS-E4800; Artificial Intelligence,CS-E3210; Machine Learning: Basic Principles,CS-C3160; Data Science,MS-C1343; Linear Algebra,MS-A0309; Differential and integral calculus 3,MS-C2111; Stochastic Processes,TU-C1030; Managerial accounting and finance for decision-makers,TU-C9260; Studio Course of Industrial Engineering and Management,TU-C9270; Introduction to Networks,TU-A1140; Leading and Understanding Oneself,TU-A1150; Philosophy and Systems Thinking,MUO-C0005; Design Theory and Methodology,ELEC-A4010; Electrical engineering workshop,TU-C1020; Creating Value,AAN-C2006; Product analysis,AAN-C2011; ADD basics
0,0.82,0.63,0.62,0.54,0.69,0.57,0.54,0.34,0.3,0.48,0.45,0.3,0.15,0.31,0.27,0.0,0.1,0.13,0.0,0.0
1,0.61,0.6,0.94,0.86,0.75,0.42,0.52,0.49,0.36,0.45,0.52,0.24,0.44,0.26,0.0,0.27,0.0,0.11,0.06,0.0
2,0.73,0.94,0.61,0.59,0.78,0.69,0.67,0.7,0.65,0.58,0.31,0.21,0.44,0.31,0.04,0.06,0.06,0.0,0.19,0.0
3,0.51,0.73,0.56,0.79,0.73,0.89,0.77,0.77,0.62,0.5,0.29,0.39,0.16,0.31,0.11,0.32,0.04,0.05,0.03,0.12
4,0.65,0.8,0.65,0.56,0.9,0.82,0.71,0.53,0.59,0.67,0.51,0.45,0.36,0.19,0.28,0.07,0.4,0.14,0.0,0.01
5,0.5,0.71,0.63,0.57,0.82,0.65,0.56,0.89,0.83,0.53,0.41,0.41,0.6,0.57,0.33,0.33,0.16,0.01,0.1,0.22
6,0.42,0.53,0.64,0.75,0.61,0.95,0.88,0.77,0.72,0.51,0.46,0.63,0.5,0.33,0.55,0.27,0.27,0.33,0.06,0.27
7,0.31,0.41,0.67,0.42,0.51,0.74,0.86,0.78,0.76,0.81,0.63,0.58,0.42,0.6,0.35,0.39,0.33,0.26,0.16,0.08
8,0.35,0.42,0.56,0.68,0.69,0.75,0.72,0.71,0.77,0.74,0.7,0.66,0.54,0.37,0.4,0.57,0.54,0.44,0.17,0.08
9,0.3,0.39,0.53,0.56,0.52,0.4,0.83,0.82,0.91,0.76,0.65,0.59,0.8,0.51,0.57,0.32,0.46,0.56,0.27,0.33
10,0.17,0.24,0.44,0.51,0.48,0.62,0.52,0.64,0.52,0.56,0.85,0.6,0.53,0.8,0.65,0.45,0.41,0.61,0.57,0.54
11,0.27,0.18,0.41,0.59,0.34,0.31,0.42,0.41,0.83,0.74,0.89,0.88,0.56,0.77,0.66,0.42,0.38,0.61,0.34,0.41
12,0.31,0.39,0.43,0.16,0.48,0.34,0.52,0.62,0.51,0.73,0.52,0.73,0.71,0.64,0.86,0.82,0.61,0.55,0.42,0.43
13,0.0,0.27,0.17,0.49,0.28,0.29,0.37,0.38,0.57,0.8,0.72,0.52,0.82,0.75,0.82,0.56,0.79,0.61,0.55,0.42
14,0.0,0.21,0.2,0.25,0.28,0.22,0.54,0.38,0.43,0.52,0.6,0.69,0.8,0.84,0.68,0.89,0.54,0.71,0.63,0.74
15,0.0,0.18,0.0,0.06,0.21,0.16,0.21,0.24,0.41,0.62,0.6,0.74,0.8,0.64,0.64,0.6,0.92,0.57,0.84,0.41
16,0.0,0.15,0.25,0.23,0.09,0.43,0.42,0.25,0.35,0.59,0.42,0.52,0.77,0.72,0.67,0.75,0.7,0.64,0.56,0.81
17,0.11,0.0,0.24,0.14,0.02,0.09,0.24,0.41,0.53,0.32,0.58,0.55,0.63,0.77,0.56,0.64,0.68,0.62,0.77,0.72
18,0.0,0.0,0.0,0.21,0.24,0.0,0.39,0.08,0.44,0.55,0.4,0.39,0.45,0.5,0.76,0.77,0.52,0.72,0.96,0.55
19,0.0,0.0,0.0,0.0,0.0,0.01,0.3,0.13,0.16,0.24,0.45,0.44,0.26,0.63,0.52,0.48,0.82,0.54,0.78,0.82
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

const sigmoid = (c, v, x) => {
  return c/(c+Math.exp(-v*x))
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
          mIndex: sigmoid(0.0111, 9, rankedCourses[i] / completedLength) * 100,
          // mIndex: rankedCourses[i] / completedLength * 100,
          // mIndex: rankedCourses[i]/l + (0.99 - rankedCourses[i]/l) * (1/4 * (Math.log(Math.max(0.019, rankedCourses[i]/l))) + 1)
        })
      }
    }
    return filtered.sort((a, b) => b.mIndex-a.mIndex)
  }
  return courseRank(completedCourses, W)
}