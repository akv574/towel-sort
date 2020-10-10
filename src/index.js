
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix===undefined || matrix.length === 0) {
    return [];
  }
  let resultArray = []
  matrix.forEach((i,index) => {
    index%2===0? resultArray = [...resultArray,...i] : resultArray = [...resultArray,...i.reverse()]
    
    
  });


  return resultArray;
}
