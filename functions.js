function getLarger(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(getLarger(3, 5));

const getLargerArrow = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};
console.log(getLargerArrow(7, 5));
