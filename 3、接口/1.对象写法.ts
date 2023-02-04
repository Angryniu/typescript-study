// 它是对行为的抽象,用于对「对象的形状（Shape）」进行描述,理解为一种约束
// 定义接口 通常在前面加I
interface IPerson{
    //只读属性
    readonly id:number,
    name:string,
    age:number,
    sex?:string, // ?可选属性，表示该属性可有可无
    //  任意属性和任意值 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的《子集》
    //  如果接口中有多个类型的属性，则可以在任意属性中使用联合类型
    [propName:string]:any 
}
let person:IPerson={
    id:10,
    name:'007',
    age:18,
    // width:17 定义的变量比接口 少 或 多 一些属性都是不正确的
}