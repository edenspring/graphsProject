// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

// There are a total of numCourses courses you have to take, labeled from 0 to numCourses -
// 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.



// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.


// Constraints:

// 1 <= numCourses <= 105
// 0 <= prerequisites.length <= 5000
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// All the pairs prerequisites[i] are unique.

let Good = [[1,0],[2,1], [3,2], [3,1], [2,0]]
let bad = [[1,0],[2,1], [0,2]]
function canFinish(numCourses, prerequisites) {
  if (!prerequisites.length) return true;
  if (numCourses <= 0) return false;
  let course = new Object()
  let prereq = new Object()
  for (each of prerequisites){
    if (course[each[0]])
    course[each[0]].push(each[1])
    else course[each[0]] = [each[1]]
  }
  //return course;
//                  obj     1      1          3
  function helper (course, key, original, recNum){
    if (recNum === 0) return true;
    let results = new Set()
    let required = course[key] // [0]
    for (element of required){ //0
      if (Number(element) === Number(original)) return false; // 0===0
      if (course[element]){ // true
      results.add(helper(course, element, original, recNum-1)) // obj, 2, 0, 2


    }
  }
  return results.toString();

  // objective : recursively check prereqs for overlap with course being examined


}

// let keys = Object.keys(course)
let booleanArray = new Set()
let number = numCourses
console.log(course)
for (keys in course){
  booleanArray.add(helper(course, keys, keys, number))
  console.log(booleanArray)
  // if (answer.has(false)){
    // return false
  // }

}
// console.log(booleanArray)
// let results = []
// booleanArray.forEach(e => {
//   if (!(typeof e === 'object')) results.push(...e)
//   else results.push(e)
// })
// console.log(results)
// if (booleanArray.includes(false))return false
return true
}

console.log(canFinish(20,bad))

// 20
// [[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]]
// 3
// [[0,2],[1,2],[2,0]]
//4
//[[0,1],[1,2],[0,3],[3,0]]
