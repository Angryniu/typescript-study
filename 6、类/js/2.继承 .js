// 扩展现有类
// 继承时类与类之间的关系
// 子类继承父类
class Animal {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log('hi' + this.name);
    }
}
class Cat extends Animal {
    constructor(name) {
        //调用父类构造函数
        super(name);
    }
    // 重写父类方法
    sayHi() {
        console.log('我是cat');
        super.sayHi(); //调用父类方法
    }
}
let a = new Animal('哈士奇');
a.sayHi();
let c = new Cat('波斯猫');
c.sayHi();
/*
总结：类与类之间存在继承关系，通过extends进行继承
子类可以调用父类的方法，通过super
子类可以重写父类方法
*/ 
