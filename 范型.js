"use strict";
// 定义函数
Object.defineProperty(exports, "__esModule", { value: true });
var Fn1 = function (num) {
    return num;
};
var x = 1;
var num = Fn1(x);
// 多个范型
var Fn2 = function (start, end) {
    return start || end;
};
var xxx = {
    num: 1
};
var Fn4 = function (obj) {
    return obj;
};
// 范型类
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.speak = function () {
        console.log(this.name);
    };
    return Person;
}());
var p = new Person('xiaoming');
p.speak();
var demo_js_1 = require("./demo.js");
console.log((0, demo_js_1.add)(1, 2));
