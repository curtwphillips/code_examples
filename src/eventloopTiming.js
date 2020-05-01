/* prints
--- Order of Speed ---
1. console.log
2. process.nextTick
3. setTimeout
4. setImmediate

--- Loop Test ---
1. console.log for loop: 0
1. console.log for loop: 200000
1. console.log for loop: 400000
1. console.log for loop: 600000
1. console.log for loop: 800000
2. console.log after completing 1000000 loops
3. process.nextTick for loop: 0
3. process.nextTick for loop: 200000
3. process.nextTick for loop: 400000
3. process.nextTick for loop: 600000
3. process.nextTick for loop: 800000
4. setImmediate for loop: 0
4. setImmediate for loop: 200000
4. setImmediate for loop: 400000
4. setImmediate for loop: 600000
4. setImmediate for loop: 800000
5. SetTimeout before loop
*/

const setTimeoutAsync = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

start();

async function start() {
  speedTest();
  await setTimeoutAsync(1000);
  loopTest();
}

function speedTest() {
  console.log('\n--- Order of Speed ---');

  setImmediate(() => console.log('4. setImmediate'));
  setTimeout(() => console.log('3. setTimeout'), 0);
  process.nextTick(() => console.log('2. process.nextTick'));
  console.log('1. console.log');
}

function loopTest() {
  console.log('\n--- Loop Test ---');

  setTimeout(() => console.log('5. SetTimeout before loop'), 0);

  const loops = 1000000;
  const printEvery = loops / 5;

  for (let i = 0; i < loops; i++) {
    setImmediate(() => {
      if (i % printEvery === 0) {
        console.log('4. setImmediate for loop:', i);
      }
    });

    // runs on the next free moment on the event loop
    process.nextTick(() => {
      if (i % printEvery === 0) {
        console.log('3. process.nextTick for loop:', i);
      }
    });

    if (i % printEvery === 0) {
      console.log('1. console.log for loop:', i);
    }
  }

  console.log(`2. console.log after completing ${loops} loops`);
}
