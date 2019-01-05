// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.
// FUNDAMENTALSSTRINGS


function highAndLow(numbers){
    var numArr = numbers.split(' ');
    var highestNum;
    var lowestNum;
    for(var i=0; i<numArr.length; i++) {
      numArr[i] = parseInt(numArr[i], 10); 
      } 
    var highestNum = Math.max(...numArr);
    var lowestNum = Math.min(...numArr);
    return highestNum + ' ' + lowestNum;
  }