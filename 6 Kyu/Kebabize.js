// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes:

// the returned string should only contain lowercase letters

function kebabize(str){
  return str.split('')
  .map(letter => letter.replace(/\d/,''))
    .filter(letter => letter!=='')
      .map( (letter,i) => 
        letter.replace( /[A-Z]/, match => i===0 ? match.toLowerCase() : '-'   +match.toLowerCase())).join('')
}
