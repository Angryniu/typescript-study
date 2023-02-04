// 类型断言 人为指定一个类型
// 二种方式
// 一、 变量 as 类型
// 二、 <类型>变量
// 将一个联合类型断言为其中一个类型
function fun5(x) {
    if (x) {
        return x.length;
    }
    else {
        return x.toString().length;
    }
}
console.log(fun5(123));
console.log(fun5("123"));
// 将任何类型断言为any型, any类型允许访问任何属性和方法
// ！！！这可能会引起错误，所以不确定就不要用any类型
window.a = "sss";
// 将any类型断言为具体的类型
function f5(a, b) {
    return a + b;
}
let a = f5(1, 2);
let b = f5("你", "好");
