// 定义抽象类 不能实例化,为子类服务
abstract class Y{
    //抽象属性
    abstract name:string
    //抽象方法
    abstract sayHi()
}
//抽象类中的抽象方法必须被子类实现
class Z extends Y{
    name: string;
    constructor(name:string){
        super()
        this.name = name
    }
    sayHi() {
        console.log(this.name)
    }
}