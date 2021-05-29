function doneOrNot(board){

  function checkRows(board) {
    let boardCopy = JSON.parse(JSON.stringify(board))
    return boardCopy.every(row => {
              if(row.sort((a, b) => a - b).join('') === '123456789'){
                return true  
              }
      })
  }
  
  function checkColumns(board) {
    let columnContainsOneToNine = false
    let boardLength = board.length
    for(let i = 0; i < boardLength; i++) {
      let column = []
      for(let y = 0; y < boardLength; y++) {
        column.push(board[y][i])
      }
      column.sort((a, b) => a - b).join('') === '123456789'
        ? columnContainsOneToNine = true
        : columnContainsOneToNine = false
    }
    return columnContainsOneToNine
  }
  
  function checkSections(board) {
    let sections = [[],[],[],[],[],[],[],[],[]]
    let sectionContainsOneToNine = false
    
    for(let x = 0; x < 9; x++){
      for(let y = 0; y < 9; y++){
        let sectionIndex = Math.floor((x / 3)) * 3 + Math.floor(y / 3);
        sections[sectionIndex].push(board[x][y]);
      }
    }
    sections.every(section => {
      section.sort((a, b) => a - b).join('') === '123456789'
        ? sectionContainsOneToNine = true
        : sectionContainsOneToNine = false
    })
    return sectionContainsOneToNine
  }
  
  return checkRows(board) && checkColumns(board) && checkSections(board) ? 'Finished!' : 'Try again!'
}