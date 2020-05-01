/* eslint-disable no-undef */
const CacheFromClass = require('../classesVsPrototypesVsObjects/cacheClass');
const CacheFromPrototype = require('../classesVsPrototypesVsObjects/cachePrototype');
const CacheFromComposition = require('../classesVsPrototypesVsObjects/cacheComposition');
const tryCache = require('../classesVsPrototypesVsObjects/tryCache');

const size = 2;
const expected = [[{ b: 'b1' }], { a: 'a1' }];

const cacheTypes = {
  'cache from class': new CacheFromClass(size),
  'cache from prototype': new CacheFromPrototype(size),
  'cache from composition': CacheFromComposition(size),
};

describe('Cache Types', () => {
  const cacheProps = ['size', 'data'];
  const cacheMethods = ['get', 'put'];

  for (let cacheType in cacheTypes) {
    const cache = cacheTypes[cacheType];

    it(`${cacheType} has size, data, get, put`, () => {
      cacheProps.forEach((prop) => {
        expect(Object.prototype.hasOwnProperty.call(cache, prop)).toBe(true);
      });

      cacheMethods.forEach((method) => {
        const type = typeof cache[method];
        expect(type).toBe('function');
      });
    });

    it(`${cacheType} adds and unshifts multiple times correctly`, () => {
      const actual = tryCache(cache);
      expect(actual).toEqual(expected);
    });
  }
});
