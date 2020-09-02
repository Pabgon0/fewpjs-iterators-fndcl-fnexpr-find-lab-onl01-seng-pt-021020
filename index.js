const testVar = {}

function superbowlWin(array) {
  let answer = array.find( array => array.result === "W")
  return !!answer ? answer.year : undefined
}
