

// 定义函数

const Fn1 = <T>(num:T):T=>{
    return num;
}

const x:number = 1;

const num = Fn1(x);
// 多个范型

const Fn2 = <T,U>(start:T,end:U):T|U=>{
    return start||end;
}

// 范型接口
type XXX<T> = {
    num:T
}

interface YYY<T> {
    num:T
}

const xxx:XXX<number> = {
    num:1
}

// 范型约束
interface ZZZ{
    num:number,
    name:string
}

const Fn4 = <T extends ZZZ>(obj:T):T=>{
    return  obj
}


// 范型类
class Person<T> {
    constructor(public name:T) {}
    speak(){
        console.log(this.name)
    }
}
const p = new Person<string>('xiaoming')
p.speak()

