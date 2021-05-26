function validParentheses(parens){
  let length = parens.length
  
  for(let i = 0; i < length; i++){
    parens = parens.replace(/\(\)/, '')
    if(parens.length === 0) break
  }
  
  return parens.length > 0 ? false : true
}