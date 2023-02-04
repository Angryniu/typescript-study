//函数声明，命名函数
function fun1(a:string,b:string):string{
    return a+b;
}

//函数表达式，匿名函数
let fun2 = function(a:string,b:string):string{
    return a+b;
}

//函数完整写法
let f1:(a:string,b:string)=>string = function(a:string,b:string):string{
    return a+b;
}