# TypeScript Handbook

## Basics

### Functions

Can specify parameter and return types:

```js
function greet(preson: string, date: Date): string {
    return `Hello ${person}, today is ${date}`;
}

const greeting = greet('Hayden', new Date());
console.log(greeting);
```

Anonymous functions don't need type annotations.

### Primitives

Support for primitives: `string`, `number`, and `boolean`. Arrays can be represent as `number[]` or `Array<number>` which is better for when generics are used `T<U>`.

`any` is equivalent to vanilla JS.

`bigint` and `symbol` also exist.

### Declaration

You can declare type with `let myName: string = "Hayden"` but this is usually inferred on declaration.

### Objects

```js
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
```

Can make property optional with `last?: string`.

### Unions

```js
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
```

### Aliases / Interfaces

```js
type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
```

Can also use interface:

```js
interface Point {
  x: number;
  y: number;
}
```

#### Difference

Extension:

```js
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

type Car = {
    name: string
}

type Prius = Car & {
    saveEnvironment: boolean
}
```

Add fields:

```js
interface Window {
    title: string
}

interface Window {
    ts: TypeScriptAPI
}

// Fields cannot be added to types after declared
```

### Type Assertion

```js
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
// OR
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```

Only works to a more or less specific version of a type.

### Literal Types

```js
// Can't reassign
let x: "hello" = "hello";

// Unions
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
```

## Narrowing

Need to be careful with unions

```js
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return new Array(padding + 1).join(" ") + input;
  }
  return padding + input;
}
```

`typeof padding === "number"` is a type guard.

Be careful with truthiness.

### Equality narrowing

```js
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
    y.toLowerCase();          
  }
}
```

### `instanceof` narrowing:

```js
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());               
  } else {
    console.log(x.toUpperCase());               
  }
}
```

### Code Flow Analysis

Analysis of code based on reachability.

### Using type predicates:

```js
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// Both calls to 'swim' and 'fly' are now okay.
let pet = getSmallPet();

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}
```

### Discriminated unions

```js
interface Shape {
  kind: "circle" | "square";
  radius?: number;
  sideLength?: number;
}

function handleShape(shape: Shape) {
  if (shape.kind === "rect") {
    // This condition will always return 'false' since the types '"circle" | "square"' and '"rect"' have no overlap.
  }
}
```

The `never` type can be used to represent a state that shouldn't exist.

## Functions in Detail

Function type expressions should be represented as `(a: string) => void)`.

### Call Signatures

```js
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}
```

### Construct Signatures

```js
type SomeConstructor = {
  new (s: string): SomeObject;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}
```

### Generic Functions

```js
function firstElement<Type>(arr: Type[]): Type {
  return arr[0];
}
```

### Inference

```js
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
```

### Constraints

```js
// Needs base length property in-order to compare
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}
```

### Specifying Type Arguments

```js
const arr = combine<string | number>([1, 2, 3], ["hello"]);
```

To write good generic functions, you should push parameters down, use fewer type parameters, and type parameters should appear twice.

### Parameters

Optional: `function f(x?: number) { ... }`. Same with callbacks:

```js
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}
```

Default: `function f(x = 10) { ... }`.

Use unions instead of overloading when possible.

Important types: `void`, `object`, `unknown`, `never`, and `Function`.

Destructuring:

```js
function sum({ a, b, c }: { a: number; b: number; c: number }) {
  console.log(a + b + c);
}
```

## Object Types

### Interfaces and Types

```js
interface Person {
  name: string;
  age: number;
}

interface Person {
  name: string;
  age: number;
}
```

### Property Modifiers

Optional Properties:

```js
interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}
```

### `readonly` Properties

```js
interface SomeType {
    readonly prop: string;
}
```

### Extending Types

```js
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}
```

Can extend multiple interfaces.

### Intersection Types

```js
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;
```

### Interfaces vs. Intersections

Difference is how conflicts are handled.

### Generic Object Types

```js
// Works with `type` too
interface Box<Type> {
  contents: Type;
}

let box: Box<string> = { contents: "hello" };

function setContents<Type>(box: Box<Type>, newContents: Type) {
  box.contents = newContents;
}
```

### Arrays

Arrays are genric types `Array<T>` and also `Map<K, V>`, `Set<T>`, and `Promise<T>`. There is `ReadonlyArray<T>`. There also tuples which are of fixed size:

```js
type StringNumberPair = [string, number];
```

## Type Manipulation

Able to create types from types.

### Generics

Important for reusability, can generalize components, and important for large software systems.

#### Functions

```js
function identity<Type>(arg: Type): Type {
  return arg;
}

// Both work because argument inference
let output = identity<string>("myString");
let output = identity("myString");
```

Intended to work on arrays:

```js
function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}

function loggingIdentity<Type>(arg: Array<Type>): Array<Type> {
  console.log(arg.length);
  return arg;
}
```

Can use for `interface`:

```js
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: GenericIdentityFn = identity;
```

#### Classes

```js
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
```

For constraints can extend base interface:

```js
interface Lengthwise {
  length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}
```

Using Class Types:

```js
function create<Type>(c: { new (): Type }): Type {
  return new c();
}
```

### `keyof` Type Operator

Takes an object type and produces a string or numeric literal union its key:

```js
type Point = { x: number; y: number };
type P = keyof Point;
```

### `typeof` Type Operator

Can be used to refer to the type of a variable or property.

### Indexed Access Types

Union of types of indexes you can do on a type.

### Conditional Types

```js
SomeType extends OtherType ? TrueType : FalseType;
```

### Mapped Types

A mapped type is a generic type which uses a union created via a keyof to iterate through the keys of one type to create another:

```js
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
```

### Template Literal Types

```js
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
```

## Classes

### Example

```js
class Point {
  _x: number;
  _y: number;

  constructor(x = 1, y = 1) {
    this._x = x;
    this._y = y;
  }

  scale(n: number): void {
    this._x *= n;
    this._y *= n;
  }

  magnitude(): number {
    Math.sqrt(this._x * this._x + this._y * this._y);
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  set x(value) {
    this._x = value;
  }

  set y(value) {
    this._y = value;
  }
}

const pt = new Point();
pt.x = 10;
pt.scale(5);
console.log(`Magnitude: ${pt.magnitude()}`);
```

Has `readonly` properties.

For derived classes, `super()` must be called before using `this` in the constructor.

### Heritage

`implements` to inherit base `interface`. They can implement multiple interfaces as well.

```js
interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}

class Ball implements Pingable {
  pong() {
    console.log("pong!");
  }
}
```

`extends` can ingerit from base class.

```js
class Base {
  greet() {
    console.log("Hello, world!");
  }
}

class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}

const d = new Derived();
d.greet();
d.greet("reader");
```

### Methods

`public`, `protected`, and `private` can be applied to methods and variables. `static` members aren't associated with the particular instance of the class. Instead of using `static` classes, it's better to just have a helper object of methods.

### Generic Classes

```js
class Box<Type> {
  contents: Type;
  constructor(value: Type) {
    this.contents = value;
  }
}

const b = new Box("hello!");
```

### Abstract

```js
abstract class Base {
  abstract getName(): string;

  printName() {
    console.log("Hello, " + this.getName());
  }
}

class Derived extends Base {
  getName() {
    return "world";
  }
}

const d = new Derived();
d.printName();
```

## Modules

```js
// @filename: hello.ts
export default function helloWorld() {
  console.log("Hello, world!");
}
```

```js
import hello from "./hello.js";
hello();
```

```js
// @filename: maths.ts
export var pi = 3.14;
export let squareTwo = 1.41;
export const phi = 1.61;

export class RandomNumberGenerator {}

export function absolute(num: number) {
  if (num < 0) return num * -1;
  return num;
}
```

```js
import { pi, phi, absolute as abs } from "./maths.js";
import * as math from "./maths.js";

const absPhi = abs(phi);
const absPi = math.absolute(pi);
```