// 泛型只在调用的使用被确定
let fanx = function <T>(args: T) {};

fanx<number>(123); // good
fanx<string>(123) // err 类型“number”的参数不能赋给类型“string”的参数。

// 泛型约束，继承接口,可为接口定义的类型
interface ItoExtend {
  name: string;
  age: number;
}

let personEat = function <T extends ItoExtend>(user: T) {
  console.log(`${user.name} is missing 潘平兰!`);
};

personEat({ name: "游江川", age: 20 });
