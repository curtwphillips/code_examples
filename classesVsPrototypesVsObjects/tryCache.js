module.exports = (cache) => {
  cache.put('a', 'a1');
  console.log(cache.get('a'));
  cache.put('b', 'b1');
  console.log(cache.get('b'));
  console.log(cache.data);
  return cache.data;
};
