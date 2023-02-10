/*
readonly 只读属性关键字，但是可以在构造函数中修改
*/
class Animal3 {
    // public readonly name;
    // readonly以及三个修饰符定义在参数上，那就是创建并且初始化age参数
    public constructor(public readonly name) {
      // this.name = name;
    }
  }
  const a3 = new Animal3("cat");
  console.log(a3)