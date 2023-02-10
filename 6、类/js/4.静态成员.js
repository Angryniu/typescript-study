// 静态方法
// 静态属性
// 只属于自己的属性和方法 --static
class P {
    static sayHi() {
        console.log('hi');
    }
}
const a1 = new P();
console.log(P.name1);
//console.log(a1.name1) 报错
//a1.sayHi(); 报错
