
// interface
// 申明接口

interface Person {
    name:string
}

const p:Person = {
    name:'peony'
}

// 继承

interface Teacher extends Person{
    age:number
}

// const t1:Teacher = {
//     name:'peony',
//     age:18,
// }


// 合并
interface Teacher {
    add:string
}

const t2:Teacher = {
    name:'peony',
    age:18,
    add:'beijing'
}

interface F1 {
    name:string
}

interface F2 {
    ads:string
}
interface F3 {
    age:number
}
interface F4 extends F1,F2,F3{

}