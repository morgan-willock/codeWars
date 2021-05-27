function queueTime(customers, n) {
  if(customers.length === 0) return 0
  let time = 0;
  let tills = [];
  let idx = null;
  let newValue = null;
  let shortestTime = null;

  for (let i = 0; i < n; i++) {
    tills.push(0)
  }

  for (let v = 0; v < customers.length; v++) {
    if(tills.indexOf(0) < -1 ) {
      idx = tills.indexOf(0)
      newValue = tills[idx] + customers[v]
      tills.splice(idx, 1, newValue)
    } else {
      shortestTime = Math.min(...tills)
      idx = tills.indexOf(shortestTime)
      newValue = tills[idx] + customers[v]
      tills.splice(idx, 1, newValue)
    }
  }
  time = Math.max(...tills)

  return time
}