// 剩余参数
function f3(a:string,...items:any[]){
    console.log(a,items);
}
f3("",1,2,3,4);

// 函数重载 函数名相同，形参不同的多个函数
// 函数重载声明，定义多个 函数 的类型
function fun3(a:string,b:string):string;
function fun3(a:number,b:number):number;
function fun3(a:string|number,b:string|number):string|number{
    if(typeof a == 'string' && typeof b == 'string'){
        return a+b;
    }else if(typeof a == 'number' && typeof b == 'number'){
        return a+b;
    }
}

console.log(fun3('刘','金升'));
console.log(fun3(1,2));