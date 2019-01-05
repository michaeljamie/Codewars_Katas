// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !



function pigIt(str){
    let words = str.split(' ');
    let latin = words.map( (word) => {
      var letter = word.charAt(0);
      var word = word.substr(1);
      var finishedWord = word + letter + 'ay';
      return finishedWord;
    })
    if (str[str.length - 1] === '!' || str[str.length-1] === '?'){
      var displace = latin.pop();
      latin.push(displace[0]);
      return latin.join(' ')
    } else {
    return latin.join(' ');
    }
  }