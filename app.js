/*
console.log('message');
logger();
// Global execution context
console.log(1);

// Functional execution context
function logger() {
  console.log(2);
  finish();
  console.log(3);
  function finish() {
    console.log('finished');
  }
}
*/

function first() {
  console.log(1);
}

function second() {
  setTimeout(() => {
    console.log(2);
  }, 0);
}

function third() {
  console.log(3);
}
first();
second();
third();
