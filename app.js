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
    console.log(data);
    setTimeout(() => {
      console.log('Data saved');
    }, 10);
    console.log('Got data...');
  }, 10);
}

// callbackHell();

const promise = new Promise((resolve, reject) => {
  resolve({ user: 'PaulT' });
  //reject('It failed !!');
});

promise
  .then((data) => {
    const user = data;
    return fetch('https://jsonplaceholder.typicode.com/todos/1');
  })
  .then((todos) => {
    console.log(todos);
  })
  .catch((err) => {
    console.log(err);
  });



const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('This is data from server')), 2000;
});

promise2.then(res => {
    console.log(res)
})


fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((data) => {
    return data.json();
  })
  .then((jsonData) => {
    console.log(jsonData);
  })
  .catch((err) => {
    console.log('Somethig wrong....' + err);
  })
  .finally(() => {
    console.log('Finally, finished');
  });

  */
async function getTodos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  console.log(data);
}
getTodos();
    