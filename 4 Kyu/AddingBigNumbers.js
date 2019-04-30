// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99"); -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(a, b) {
    let sum = ""; 
    let aLength = a.length;
    let bLength = b.length;
    if (bLength > aLength) {
      let temp = b;
      b = a;
      a = temp;
    }
    let carry = 0;
    let string1;
    let string2;
    let temp;
    let digitSum;
    for (let i = 0; i < a.length; i++) {
      string1 = parseInt(a.charAt(a.length - 1 - i)); 
      string2 = parseInt(b.charAt(b.length - 1 - i)); 
      string2 = string2 ? string2 : 0; 
      temp = (carry + string1 + string2).toString(); 
      digitSum = temp.charAt(temp.length - 1);
      carry = parseInt(temp.substr(0, temp.length - 1)); 
      carry = carry ? carry : 0; 
      sum = i === a.length - 1 ? temp + sum : digitSum + sum; 
    }
    return sum; 
  }
  
  