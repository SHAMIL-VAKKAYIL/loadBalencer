const { parentPort, workerData } = require('worker_threads');
const isPrime = require('../utils/isPrime');

function generatePrimes(max) {
  const primes = [];
  for (let i = 2; i <= max; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
}

const result = generatePrimes(workerData);
parentPort.postMessage(result);
