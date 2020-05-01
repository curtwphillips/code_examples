let animal = {
  name: '',
  eats: true,
  set fullName(name) {
    this.name = name;
  },
  get fullName() {
    return this.name;
  },
};

let rabbit = {
  jumps: true,
};

let longEar = {
  earLength: 10,
};

// rabbit.__proto__ = animal;
Object.setPrototypeOf(rabbit, animal);
Object.setPrototypeOf(longEar, rabbit);

console.log(longEar.eats);
console.log(longEar.jumps);
console.log(Object.getPrototypeOf(longEar));
longEar.fullName = 'My Name';
console.log(longEar.fullName);

//////

const proto = {
  data: {},
  hello: function hello() {
    console.log('Hello, my name is ' + this.name);
  },
};

var george = Object.assign({}, proto, { name: 'George' });
// var george = Object.create(proto);
george.name = 'George';
george.hello();
george.data.key1 = 'key1val';
console.log(george.data);

const Model = function () {
  const data = {};

  return {
    hello: function () {
      console.log('Hello, my name is ' + data.name);
    },
    set: function (key, val) {
      data[key] = val;
    },
    get: function (key) {
      return data[key];
    },
  };
};

const model = Object.create(Model());
model.set('testKey', 'testVal');
model.get('testKey');
model.set('name', 'Ted');
model.hello();

console.clear();
