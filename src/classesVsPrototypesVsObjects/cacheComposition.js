// implements a least recently used (LRU) cache using composition

const put = (data, size) => {
  return (key, val) => {
    const o = {};
    o[key] = val;

    if (data.length === size) {
      data.pop();
    }

    data.push(o);
  };
};

const get = (data) => {
  return (key) => {
    const index = data.findIndex((o) => o[key]);
    if (index === -1) {
      return -1;
    }

    if (index > 0) {
      const result = data.splice(index, 1);
      data.unshift(result);
    }

    return data[0];
  };
};

const Cache = (size) => {
  const data = [];

  return Object.assign(
    {},
    { get: get(data) },
    { put: put(data, size) },
    {
      size,
      data,
    }
  );
};

module.exports = Cache;
