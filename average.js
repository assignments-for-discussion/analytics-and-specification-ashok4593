function average(numbers) {
  let totalNotNulls = numbers.length;
  // failure tolerance can be considered as a threshold, 
  //if number of NaNs goes beyond a threshold we can say sensor is unreliable.
  // failure tolerance value ranges between 0 and 1.eg:- 0.5 
  //so, if sensor failes to capture 50% of values,then sensor is unreliable
  let failureTolerance = 0.5;

  const sumOfReadings = numbers.reduce((p, c) => {
    if (c) {
      return p + c;
    }
    totalNotNulls--;
    return p;
  }, 0);

  if ((totalNotNulls / numbers.length).toFixed(2) <= failureTolerance)
    return NaN;
  return sumOfReadings / totalNotNulls;
}

module.exports = { average };
