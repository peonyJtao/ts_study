// 类的声明
class Students {
    private readonly name:string; // 私有属性
    public age:number;  // 公有属性 
    protected sex:string; // 保护属性
    
    // 构造器
    getAge: () => number;
    constructor(name:string,age:number,sex:string) {
        this.name = name;
        this.age=age;
        this.sex=sex;
    }
    
    // 方法
    getName():string{
        return this.name;
    }
}
// 原型链上添加方法
// this 指向实例对象
Students.prototype.getAge = function(){
    return this.age;
}


class Person{
    constructor(
        public name:string,
        public age:number
    ) {
    }
    getName():string{
        return this.name;
    }
    getAge():number{
        return this.age;
    }
}
