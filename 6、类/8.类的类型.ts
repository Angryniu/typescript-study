//给类加上 TypeScript 的类型很简单，与接口类似,注意继承关系
class Animal4 {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHi(): string {
      return `My name is ${this.name}`;
    }
  }
  
  let a4: Animal4 = new Animal4('Jack');
  console.log(a.sayHi()); // My name is Jack