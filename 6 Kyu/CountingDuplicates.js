// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. 

// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(str){
  var letters = str.toLowerCase();
  var duplicates = [];
  for (let i=0; i<letters.length; i++){
    if (letters.indexOf(letters[i])!== i){
     if (!duplicates.includes(letters[i])){
       duplicates.push(letters[i]); 
     }
    }
  }
  return duplicates.length
}

duplicateCount('aaBcCCCde')

