interface IAddFunc{
    (a:string,b:string):string // 函数参数类型 函数返回值类型
}
//使用赋值方式
let fun1:IAddFunc = function(a:string,b:string):string{
    return a+b;
}