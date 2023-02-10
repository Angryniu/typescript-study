//给类加上 TypeScript 的类型很简单，与接口类似,注意继承关系
class Animal4 {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `My name is ${this.name}`;
    }
}
let a4 = new Animal4('Jack');
console.log(a.sayHi()); // My name is Jack
