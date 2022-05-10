function findSingleOne(arr){
  const obj = {}
  arr.forEach(item=>{
    if (obj[item]){
      obj[item]++
    } else {
      obj[item] = 1
    }
  })
  for (let item in obj){
    if (obj[item] === 1){
      console.log(item);
      return item
    }
  }
  console.log('无符合要求数值');
}
const arr = [2, 2, 1, 1, 3]
findSingleOne(arr)
