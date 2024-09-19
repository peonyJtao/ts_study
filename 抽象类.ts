abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earth...');
    }
}


class Dog extends Animal {
    makeSound(): void {
        console.log('bark');
    }
}
// 抽象类不能被实例化，里面有抽象方法，也可以普通方法


// 抽象类和interface的相同与不同

// 相同：都可以定义类的格式
// 不同
// 接口只能描述类的属性和方法，而抽象类可以描述类的属性，方法，和构造函数
// 一个类可以继承多个类，一个类只能继承一个抽象类