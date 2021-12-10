function average(numbers) {
  let totalNotNulls = numbers.length;
  return (
    numbers.reduce((p, c) => {
      if (c) {
        return p + c;
      }
      totalNotNulls--;
      return p;
    }, 0) / totalNotNulls
  );
}

module.exports = { average };
