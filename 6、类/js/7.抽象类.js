// 定义抽象类 不能实例化,为子类服务
class Y {
}
//抽象类中的抽象方法必须被子类实现
class Z extends Y {
    constructor(name) {
        super();
        this.name = name;
    }
    sayHi() {
        console.log(this.name);
    }
}
