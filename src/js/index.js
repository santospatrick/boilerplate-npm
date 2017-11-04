import unique from 'uniq';

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];
var copiedData = [...data];

console.log('some es6 scripts & UMD example');
console.log(unique(copiedData));

// Eslint max line length rule
var foo = { 'bar': 'This is a bar.', 'baz': { 'qux': 'This is a qux' }, 'difficult': 'to read' };

// Only to show browser support error
fetch('https://api.github.com/users/santospatrick')
  .then(resp => resp.json())
  .then(me => console.table(me));
