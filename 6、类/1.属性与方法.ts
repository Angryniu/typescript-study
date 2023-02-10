// 类 定义了一件事物的抽象特点，包含它的属性和方法
// 对象 类的实例，通过new生成
// 面向对象的三大特性：继承（子似父，更突出）、封装（隐藏细节，提供接口）、多态（不同类对同一方法的不同响应）
// 存取器、修饰符、抽象类、接口


// 实例化对象
class Person{
    public name:string
    private age:number
    constructor(name:string,age:number){
        this.name=name;
        this.age = age;
    }
    sayHi(name:string,age:number){
        console.log("hi,我是"+name+','+age+'岁')
    }
}
let p = new Person('刘某',18); // 执行类中的构造方法 constructor
p.sayHi('李四',18);
