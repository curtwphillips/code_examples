// implements a least recently used (LRU) cache using classes

class Cache {
  constructor(size) {
    this.size = size;
    this.data = [];
  }

  get(key) {
    const index = this.data.findIndex((o) => o[key]);
    if (index === -1) {
      return -1;
    }

    if (index > 0) {
      const result = this.data.splice(index, 1);
      this.data.unshift(result);
    }

    return this.data[0];
  }

  put(key, val) {
    const o = {};
    o[key] = val;

    if (this.data.length === this.size) {
      this.data.pop();
    }

    this.data.push(o);
  }
}

module.exports = Cache;
