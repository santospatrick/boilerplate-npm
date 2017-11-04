import unique from 'uniq';

const data = [1, 2, 2, 3, 4, 5, 5, 5, 6];
const copiedData = [...data];

console.log('some es6 scripts & UMD example');
console.log(unique(copiedData));

// Prettier fix and break lines automatically!
// docs: 
let foo = { bar: 'This is a bar.', baz: {qux: 'This is a qux'}, difficult: 'to read' };
let fooFixed = {
  bar: 'This is a bar.',
  baz: {qux: 'This is a qux'},
  difficult: 'to read',
};

console.log(foo, fooFixed);

// Error on purpose to show browser support error
fetch('https://api.github.com/users/santospatrick')
  .then(resp => resp.json())
  .then(me => console.log(`@${me.login}`));
