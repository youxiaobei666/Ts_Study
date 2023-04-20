// 不指定类型会有类型推导
let arr = [1,2,3]
// 联合类型，也可被推导
let arr1 = ["youxiaobei",2] // string | number

let arr3 : number[] = [1,2,3]
// 指定类型后不能随意往数组内赋值
let arr4 : number[] = ["string",123] // err 不能将类型“string”分配给类型“number”。

// 定义联合类型数组
let arr5 : (number | string)[] = [123,"string"]

// 定义有对象成员的数组
let arr6 : object[] = [{ name:"youxiaobei" },{ age: 19 }]
console.log(arr6);




