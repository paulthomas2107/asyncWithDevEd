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

function second(callback) {
  setTimeout(() => {
    console.log(2);
    callback();
  }, 0);
}

function third() {
  console.log(3);
}
first();
second(third);

function logger(message) {
  message();
}

function message() {
  console.log('Hello there !');
}

logger(message);

function callbackHell() {
  setTimeout(() => {
    const data = {
      user: 'Paulie',
    };
      console.log(data)
      setTimeout(() => {
          console.log('Data saved')
      }, 1000)
    console.log('Got data...');
  }, 500);
}

callbackHell()