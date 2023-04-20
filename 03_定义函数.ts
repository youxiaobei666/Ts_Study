function foo(num1: number, num2: number): number {
  return num1 + num2; // 返回值是数字类型，函数就是 ：number
}
console.log(foo(123, 456));
//或者
let bar: (x: string) => number = function (x: string) {
  console.log(x.length); // 函数参数为数字类型
  return 123; // 返回值是数字类型，
};
console.log(bar("youxiaobei"));

// 函数的可选参数，注意可选参数必须在后面
let koo: (x: number, y?: number) => number = function (x: number, y?: number) {
  if (y) {
    console.log("输入了第二个参数");
  }
  return x;
};

koo(1, 2);
koo(3);

// 参数默认值
let boo: (x: number, y?: string) => number = function (
  x: number,
  y: string = "默认值"
) {
  console.log(y);

  return x;
};

console.log(boo(1, "hhhh"));

// 剩余参数
function pushArr(arr1: any[], ...items: any[]) {
  let newArr: any[] = arr1;
  items.forEach((item) => {
    newArr.push(item);
  });
  console.log(newArr);
}
let arr: any[] = [1, 2];
pushArr(arr);
pushArr(arr, [123], [456]);
