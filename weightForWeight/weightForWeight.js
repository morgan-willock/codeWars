function orderWeight(strng) {
  let numbers = strng.split(' ');
  
  function numberWeight(number) {
    let total = 0
    
    number.split('').forEach(number => {
      total += Number(number)
    })
    
    return total
  }
  
  numbers.sort((a, b) => {
    if(numberWeight(a) === numberWeight(b)) {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    }
    return numberWeight(a) - numberWeight(b)
  });
  
  return numbers.join(' ')
}