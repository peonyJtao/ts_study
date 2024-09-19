// number null undefined array object never void enum


//  定义数据number
//  定义number的方式1
const num: number = 1;
//  定义number的方式2
const num1 = <number>1212;

// 定义string
const str1: string = 'peony'
const str2 = <string>'peony';

const str3: null = null;

const str4: undefined = undefined;

// 定义数组
let arr: [number, string]
arr = [1, '2']

let arr2 :[number,...string[]]
arr2 = [1, '2','3']

// 定义object
let obj: {
    x: string,
    y?: number,
    [key:string]:number|string|boolean
}
obj = {
    x: 'peony',
    y: 1,
    z: true
}

// 定义never
const oNever = ():never=>{
    throw  Error('111')
}
const b = oNever();

// void 返回一个空值
const xx = ():void=>{
    console.log(11)
}
xx()






