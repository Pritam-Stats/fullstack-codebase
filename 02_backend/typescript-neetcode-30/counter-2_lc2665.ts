/**
 * 
 * Link: https://leetcode.com/problems/counter-ii/description/
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.

 */

type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): Counter {
  let currCount: number = init;
  // const increment = () => ++currCount;
  // const decrement = () => --currCount;
  // const reset = () => {
  //     currCount = init;
  //     return currCount;
  // };

  return {
    increment: () => {
      return ++currCount;
    },
    decrement: () => --currCount,
    reset: () => {
      currCount = init;
      return currCount;
    },
  };
}

console.log(createCounter(4).decrement());
