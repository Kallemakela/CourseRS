const math = require('mathjs')

export default function recommend(courseList){
    const W = [[0, 1, 0.5, 0],
           [0, 0, 1, 0], 
           [0.5, 1, 0, 0],
           [0, 0, 0, 0]]

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
