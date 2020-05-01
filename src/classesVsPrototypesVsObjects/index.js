const CacheFromClass = require('./cacheClass');
const CacheFromPrototype = require('./cachePrototype');
const CacheFromComposition = require('./cacheComposition');
const tryCache = require('./tryCache');

const size = 2;

console.log(
  'Running this sequence on each cache type:\n  put("a", "a1"),\n  get("a"),\n  put("b", "b1"),\n  get("b")'
);

console.log('\n--- Cache with Class Result ---');
console.log(tryCache(new CacheFromClass(size)));

console.log('\n--- Cache with Prototypes Result ---');
console.log(tryCache(new CacheFromPrototype(size)));

console.log('\n--- Cache with Object Composition Result ---');
console.log(tryCache(CacheFromComposition(size)));

console.log();
