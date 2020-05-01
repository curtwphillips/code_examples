module.exports = (cache) => {
  cache.put('a', 'a1');
  cache.get('a');
  cache.put('b', 'b1');
  cache.get('b');
  return cache.data;
};
