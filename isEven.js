function isEven (num) {
  if (num < 0) {
    num = num * (-1);
  }
  if (num == 0) {
    return ("even");
  } else if (num == 1) {
    return ("odd");
  } else {
    return isEven (num -2);
  }
};


console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
