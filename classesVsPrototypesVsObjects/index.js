const CacheFromClass = require('./cacheClass');
const CacheFromPrototype = require('./cachePrototype');
const CacheFromComposition = require('./cacheComposition');
const tryCache = require('./tryCache');

const size = 2;

console.log('\n--- Cache with Class ---');
tryCache(new CacheFromClass(size));

console.log('\n--- Cache with Prototypes ---');
tryCache(new CacheFromPrototype(size));

console.log('\n--- Cache with Object Composition ---');
tryCache(CacheFromComposition(size));
