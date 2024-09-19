

// 定义type

type T1 = number;
const t1:T1 = 12;

type T2 = {
   name:string
}

const t2:T2 = {
    name:'zhangsan'
}

// type联合
type T3 = {
    age:number
}
type T4 = T3 & T2;
const t3:T4 = {
    name:'zhangsan',
    age:12
}
// type 交叉类型
type T5=  T3|T2;
const t4:T5 = {
    name:'zhangsan'
}


// type和interface 的异同

//相同
// 都可以定义对象属性


//  不同
// type 可以定义交叉类型，联合类型，但是不可以继承 和 自动合并
//interface 可以继承 自动合并