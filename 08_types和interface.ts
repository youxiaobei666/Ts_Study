// 两者定义对象和函数

// 1. type定义
type object1 = {
  name: string;
  age: number;
};

type function1 = (x: number, y: boolean) => void;

// 2. interface
interface Iobject2 {
  name: string;
  age: number;
}

interface Ifunction2 {
  (x: number, y: boolean): void;
}

let tp: function1 = function () {};
tp(1, true);

let inte: Ifunction2 = function () {};
inte(123, 12); // 类型“number”的参数不能赋给类型“boolean”的参数。


// 类型别名其他用法
// primitive
type Name = string;

// object
type PartialPointX = { x: number; };
type PartialPointY = { y: number; };

// union
type PartialPoint = PartialPointX | PartialPointY;

// tuple
type Data = [number, string];

// dom
let div = document.createElement('div');
type B = typeof div;