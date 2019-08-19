// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const whateverDude = () => {
  let dudeMan = 'Henry';
  let helloDude = () => {
    console.log('Hey ' + dudeMan + ', whats happenin?');
  }
  return helloDude;
}
dudeMan = 'Bob';
let superFunc = whateverDude();
superFunc();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
let numberCount = 0;
const counter = () => {
  let count = () => {
    return numberCount += 1;
    console.log(numberCount);
  }
  return count;
};
let newCounter = counter();
newCounter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  const counterObj = {
    increment: function(count) {
      console.log(count++);
      return count;
    }
  }
  return counterObj;
};



