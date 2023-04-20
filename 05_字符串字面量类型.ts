let derc : "top" = "top"
derc = "sss" // 不能将类型“"sss"”分配给类型“"top"”

type derction = "top" | "down";
let changederc = function (derc: derction) {
  console.log("改变了方向");
};

changederc("left"); // 类型“"left"”的参数不能赋给类型“derction”的参数
changederc("top");

// 数字字面量类型及布尔字面量类型
interface IConfig {
  number: 1 | 2 | 3;
  derc: "top" | "left" | "down" | "right";
  isEated: true | false
}

let test = function(user:IConfig) {
    // 接口定义类似对象的类型
}

export {}

test({
    number: 1 ,//不能将类型“4”分配给类型“1 | 2 | 3”。
    derc: "center", //不能将类型“"center"”分配给类型“"top" | "down" | "left" | "right"
    isEated: "yes" //不能将类型“string”分配给类型“boolean”
})
