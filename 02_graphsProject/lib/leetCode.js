

class Classes {
  constructor(){
    this.adjList = new Object()
  }
  addClass(course){
    if (this.adjList[course]) return;
    this.adjList[course] = [];
  }

  addPrerequisite(course, pre){
    if (!this.adjList[course]) this.addClass(course);
    if (!this.adjList[pre]) this.addClass(pre);

    const srcVertex = this.adjList[course];
    const destVertex = this.adjList[pre];

    srcVertex.push(pre);
    // destVertex.push(course);
  }
}

var canFinish = function(numCourses, prerequisites) {
  const courses = new Classes()
  prerequisites.forEach(e=>{
    let [course, pre] = e;
    courses.addPrerequisite(course, pre)
  })
  for (key in courses.adjList){  // 0
    let pre = courses.adjList[key] //2
    console.log('pre : ',pre)
    let newSet = new Set()
    let preReqArr = [];
    let loopCount = numCourses;

    while(pre.length > 1){
      preReqArr.concat(pre.shift())
    }//4
    console.log('pre req arr pre loop : ', preReqArr)
    while (loopCount > 0){
      console.log('in while loop pre : ' ,pre)
      preReqArr.concat(pre)
      pre = courses.adjList[pre]
      // console.log(pre) // 0
      loopCount--
    }
    console.log('prereq post loop: ', preReqArr)
    newSet.add(pre) //2,
    console.log(newSet)
    // console.log([Number(key)])
    // console.log( (newSet.has(Number(key))))
    if (newSet.has(Number(key))) return false;
  }
  console.log(courses)
  return true;
}

// console.log(canFinish(3, [[0,2],[1,2],[2,0]]))
console.log(canFinish(4, [[0,1],[1,2],[0,3],[3,0]]))
// console.log(canFinish(20, [[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]]))
// console.log(canFinish(4, [[1,0],[2,1], [3,2], [3,1], [2,0]]))

/*
adjList :
*/
