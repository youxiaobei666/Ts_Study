// 6种常用类型
let name : string = "游小北"
let age : number = 20
let bool : boolean = true
let un : undefined = undefined
let nu : null = null
let obj : object = { gender : "男" }

// 联合类型
let lianhe : string|number
lianhe = "string"
lianhe = 14
lianhe = true  // err 不能将类型“boolean”分配给类型“string | number”

export {}