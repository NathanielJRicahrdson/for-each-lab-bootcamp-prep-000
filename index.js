function iterativeLog(array) {
  array.forEach((element, index) => {
     console.log(`${index}: ${element}`)
   })
 }

function iterate(callback) {
  var soccer = ['Messi']
  soccer.forEach(callback)
  return soccer
}

function doToArray(array, callback) {
   array.forEach(callback)
 }
