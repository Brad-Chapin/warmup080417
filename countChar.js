function countChar (string, letter) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == letter) {
      count++;
    }
  }
  console.log(count);
}

countChar ("Big Bad Booger Bats", "B");
countChar ("My Mom Makes Muffins Magically", "M");
