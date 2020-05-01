// implements a least recently used (LRU) cache using prototypes

function Cache(size) {
  this.size = size;
  this.data = [];
}

Cache.prototype.get = function (key) {
  const index = this.data.findIndex((o) => o[key]);
  if (index === -1) {
    return -1;
  }

  if (index > 0) {
    const result = this.data.splice(index, 1);
    this.data.unshift(result);
  }

  return this.data[0];
};

Cache.prototype.put = function (key, val) {
  const o = {};
  o[key] = val;

  if (this.data.length === this.size) {
    this.data.pop();
  }

  this.data.push(o);
};

module.exports = Cache;
