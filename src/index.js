
exports.min = function min (array) {
  if(!(Array.isArray(array)) || array.length === 0){
    return 0;
  };
  var minValue = Math.min.apply(null, array);
  return minValue;
}

exports.max = function max (array) {
  if(!(Array.isArray(array)) || array.length === 0){
    return 0;
  };
  var maxValue = Math.max.apply(null, array);
  return maxValue;
}

exports.avg = function avg (array) {
  if(!(Array.isArray(array)) || array.length === 0){
    return 0;
  };
  var sum = 0;
  for(let i = 0; i < array.length;i++){
    sum+=array[i];
  };
  var avgValue = sum/array.length;
  return avgValue;
}
