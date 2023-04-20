interface IConfig {
  // 此处定义的是字面量作类型限制，而不是类型符号
  number: 1 | 2 | 3;
  derc: "top" | "left" | "down" | "right";
  isEated: true | false;
}

let test = function (user: IConfig) {
  // 使用接口当作类型，减少代码冗余
  // 接口定义类似对象的类型
};

// 类型别名type覆盖，多次定义接口会合并，同一个接口定义多次合并为一个
interface I1 {
  number1: number;
}

interface I1 {
  number2: number;
}

const obj: I1 = { number1: 123, number2: 456 };
console.log(obj);

export {};
