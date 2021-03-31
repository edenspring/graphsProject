/**
 * In this file, you will implement the friendsOf function that will calculate
 * the group of friends that a person has a certain distance from them.
 *
 * @param {Object} adjacencyList - The adjacency list that describes the graph,
 * never null or undefined
 * @param {string} name - The name of the person from where you will start your
 * search, never null or undefined
 * @param {number} distance - The distance away that you will traverse to find
 * the person's friends-of list, always a value greater than or equal to 1
 *
 * You will also need to implement a friendsOfRecursion function that will
 * recurse through your friends graph. friendsOf will call this.
 *
 * @param {string} name - the name of the person from where you will start
 * your search, never null or undefined.
 * @param {Object} adjacencyList - The adjacency list that describes the graph,
 * never null or undefined
 * @param {Set} visited - A list of all the graph nodes we have visited
 * @param {number} maxDistance - the maximum distance you want to recurse into
 * the graph, for example 1 should find immediate friends and 3 should find
 * immediate friends, friends of immediate friends, and friends of those friends
 * @param {number} currentDistance - the current distance we are at during our
 * recursion
 *
 * Hint: You can convert a Set into an Array using the `Array.from()` method.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 *
 * Hint: refer to the documentation of Set on MDN here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 */

function friendsOfRecursion(name, adjacencyList, visited, maxDistance, currentDistance) {
  let recurFriends = adjacencyList[name]
  // if (recurFriends.length === 1) return name;
  //console.log('before adding : ', visited)
  recurFriends.forEach(e => visited.add(e))
  //console.log('after adding : ', visited)
  if (currentDistance < maxDistance){
    recurFriends.forEach(e => {
      visited.add(...friendsOfRecursion(e, adjacencyList, visited, maxDistance, currentDistance+1))
    })
  }

  return Array.from(visited);
}

function friendsOf(adjacencyList, name, distance) {
  if (!adjacencyList) return undefined;
  if (!adjacencyList[name]) return undefined;

  let  friends = adjacencyList[name]
  // console.log(friends)
  if (friends.length === 0) return []
  if (friends.includes(name)) return []

  // if (friends.length === 1) {
  //   let friendsFriends = adjacencyList[friends[0]]
  //   if (friendsFriends.length === 1){
  //     return friends
  //   }
  // }

  if (distance > 1){
    let visited = new Set()
    friends.forEach(friend =>{
      visited.add(friend);
      visited.add(...friendsOfRecursion(friend, adjacencyList, visited, distance, 2))
    })
    let visitedArray = Array.from(visited)
    console.log(name)
    console.log(visitedArray)
    friends = visitedArray.filter(e => e !== name);

  }
  return friends;
}

/******************************************************************************
* Do not change code beneath this line.
*/
try {
exports.friendsOf = friendsOf;
} catch (e) {
exports.friendsOf = () => { throw new Error('Cannot export friendsOf.') };
}
