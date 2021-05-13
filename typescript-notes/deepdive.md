# Deep Dive

## Why TypeScript?

Provide optional type system for JavaScript and planned features from future JavaScript editions.

### Type System

* Increase refactoring agility.
* Types are inline documentation. Function signature is a theorem and the function body is the proof.

## Classes

```js
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}

const p1 = new Point(0, 10);
const p2 = new Point(10, 20);
const p3 = p1.add(p2);
```

Generates:

```js
const Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.add = function (point) {
        return new Point(this.x + point.x, this.y + point.y);
    };
    return Point;
})();
```

### Inheritance

```js
class Point3D extends Point {
    z: number;
    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.z = z;
    }
    add(point: Point3D) {
        const point2D = super.add(point);
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    }
}
```

Must call parent constructor to ensure `this` is properly set.

### Statics

`static` properties are shared by all instances of the class.

```js
class Thing {
    static instances = 0;
    constructor() {
        Thing.instances++;
    }
}
const t1 = new Thing();
const t2 = new Thing();
console.log(Thing.instances); // 2
```

### Access Modifiers

Allow for `public`, `protected`, and `private`.

```js
class FooBase {
    public x: number;
    private y: number;
    protected z: number;
}

// EFFECT ON INSTANCES
var foo = new FooBase();
foo.x; // okay
foo.y; // ERROR : private
foo.z; // ERROR : protected

// EFFECT ON CHILD CLASSES
class FooChild extends FooBase {
    constructor() {
      super();
        this.x; // okay
        this.y; // ERROR: private
        this.z; // okay
    }
}
```

### Abstract

`abstract` classes cannot be directly instantiated and instead need to be inherited.

```js
abstract class FooCommand {}
class BarCommand extends FooCommand {}
const fooCommand: FooCommand = new FooCommand(); // Cannot create an instance of an abstract class
const barCommand: BarCommand = new BarCommand();
```

Abstract methods must be implemented on inheritance.

```js
abstract class FooCommand {
  abstract execute(): string;
}

class BarErrorCommand  extends FooCommand {} // 'BarErrorCommand' needs implement abstract member 'execute'.

class BarCommand extends FooCommand {
  execute() {
    return `Command Bar executed`;
  }
}

const barCommand = new BarCommand();
barCommand.execute(); // Command Bar executed
```

### Constructors

A constructor isn't required.

```js
class Foo {
    x: number;
    constructor(x:number) {
        this.x = x;
    }
}

// Can be written as
class Foo {
    constructor(public x:number) {
    }
}
```

### Immediately-Invoked Function Expression (IIFE)

Instead of:

```js
function Point(x, y) {
    this.x = x;
    this.y = y;
}
Point.prototype.add = function (point) {
    return new Point(this.x + point.x, this.y + point.y);
};
```

Classes are represented as IIFEs:

```js
(function () {
    // BODY
    return Point;
})();
```

This is to be able to use the base class variable `_super` as a param:

```js
const Point3D = (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        _super.call(this, x, y);
        this.z = z;
    }
    Point3D.prototype.add = function (point) {
        const point2D = _super.prototype.add.call(this, point);
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    };
    return Point3D;
})(Point);
```

And inheritances with `extends` generates this function:

```js
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
```

### Arrow Functions

Need to use `=>` to capture `this`.

```js
function Person(age) {
    this.age = age;
    this.growOld = () => {
        this.age++;
    }
    // OR
    var _this = this;  // capture this
    this.growOld = function() {
        _this.age++;   // use the captured this
    }
}
var person = new Person(1);
setTimeout(person.growOld,1000);

setTimeout(function() { console.log(person.age); },2000); // 2
```

Applies the same way for classes.

### Rest Parameters

```js
function iTakeItAll(first, second, ...allOthers) {
    console.log(allOthers);
}
iTakeItAll('foo', 'bar'); // []
iTakeItAll('foo', 'bar', 'bas', 'qux'); // ['bas','qux']
```

### Iteration

```js
var someArray = [9, 2, 5];
for (var item in someArray) {
    console.log(item); // 0,1,2
}

var someArray = [9, 2, 5];
for (var item of someArray) {
    console.log(item); // 9,2,5
}
```

### Promises

Promise is initially in pending state and then is either fulfilled or rejected

```js
const promise = new Promise((resolve, reject) => {
    resolve("hey)
});

promise.then((res) => {
    console.log(res);
});

promise.catch((err) => {
    // This is never called
});
```

```js
function iReturnPromiseAfter1Second(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Hello world!"), 1000);
    });
}

Promise.resolve(123)
    .then((res) => {
        // res is inferred to be of type `number`
        return iReturnPromiseAfter1Second(); // We are returning `Promise<string>`
    })
    .then((res) => {
        // res is inferred to be of type `string`
        console.log(res); // Hello world!
    });
```

Sequential:

```js
// an async function to simulate loading an item from some server
function loadItem(id: number): Promise<{ id: number }> {
    return new Promise((resolve) => {
        console.log('loading item', id);
        setTimeout(() => { // simulate a server delay
            resolve({ id: id });
        }, 1000);
    });
}

// Chained / Sequential
let item1, item2;
loadItem(1)
    .then((res) => {
        item1 = res;
        return loadItem(2);
    })
    .then((res) => {
        item2 = res;
        console.log('done');
    }); // overall time will be around 2s

// Concurrent / Parallel
Promise.all([loadItem(1), loadItem(2)])
    .then((res) => {
        [item1, item2] = res;
        console.log('done');
    }); // overall time will be around 1s
```

Parallel / whichever finishes first:

```js
var task1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000, 'one');
});
var task2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 2000, 'two');
});

Promise.race([task1, task2]).then(function(value) {
  console.log(value); // "one"
  // Both resolve, but task1 resolves faster
});
```

### Generators

`function *` creates a generator function. Calling a generator function returns a generator object which follows the iterator interface (`next`, `return`, and `throw`)

```js
function* idMaker(){
  let index = 0;
  while(index < 3)
    yield index++;
}

let gen = idMaker();

console.log(gen.next()); // { value: 0, done: false }
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { done: true }
```

Can be used with `yield`:

```js
function* generator(){
    console.log('Execution started');
    yield 0;
    console.log('Execution resumed');
    yield 1;
    console.log('Execution resumed');
}

var iterator = generator();
console.log('Starting iteration'); // This will execute before anything in the generator function body executes
console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

### Async Await

Need to pause function execution, put value inside function, and throw an exception inside the function.

```js
function delay(milliseconds: number, count: number): Promise<number> {
    return new Promise<number>(resolve => {
            setTimeout(() => {
                resolve(count);
            }, milliseconds);
        });
}

// async function always returns a Promise
async function dramaticWelcome(): Promise<void> {
    console.log("Hello");

    for (let i = 0; i < 5; i++) {
        // await is converting Promise<number> into number
        const count: number = await delay(500, i);
        console.log(count);
    }

    console.log("World!");
}

dramaticWelcome();
```

