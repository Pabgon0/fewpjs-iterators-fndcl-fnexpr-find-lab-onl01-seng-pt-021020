const testVar = {}

function superbowlWin(array) {
  let answer = array.find( array => array.answer === "W")
  return !!answer ? answer.year : undefined
}
