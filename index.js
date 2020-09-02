const testVar = {}

function superbowlWin(array) {
  let answer = array.find( win => win.answer === "W")
  return answer.year
}
