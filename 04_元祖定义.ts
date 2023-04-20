let yuanzu: [string, number, boolean]; // 元祖类型，数量类型都得对应
yuanzu = ["youxiaobei", 1, true];

// 当数量和类型都不确定，使用 any[]
let nuknown: any[];
nuknown = [1];
nuknown = ["youxiaobei"];
nuknown = [1, 2, 3, "string"];

// 解构
let emploee: [number, string] = [1, "youxiaobei"];
let [id, name] = emploee;
console.log(`id : ${id}`); //id : 1
console.log(`name : ${name}`); //name : youxiaobei

// 元祖可选元素
let choose: [string, boolean?];
choose = ["i can choose", true];
console.log(`choose : ${choose}`);
choose = ["i no choose"];
console.log(`choose : ${choose}`);

// 元祖剩余元素
let lefted: [string, ...number[]];
lefted = ["lefted meta", 1, 2, 3, 4, 5];
console.log(`lefted : ${lefted}`);
lefted = ["only one"];
console.log(`lefted : ${lefted}`);

// 只读 readonly 
let readonly: readonly [string, number] = ["i am readonly", 124];
readonly = ["i want get in", 123];
readonly = ["123", 123];
console.log(readonly); //可以赋值
// readonly[1] = 1234 //无法分配到 "1" ，因为它是只读属性
// readonly.push(1) //类型“readonly [string, number]”上不存在属性“push”
export {};
