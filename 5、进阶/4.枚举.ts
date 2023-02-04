// 使用枚举类型给一组数值赋予名称
// 枚举可以通过名称取值，也可以通过值取名称
// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：
enum NumberType{
    one=1, // 手动赋值   如果没有赋值第一个就默认为0，往后依次递增
    tow, // 后面的值如果没有手动赋值，就会根据前面的值递增+1
    three=10,
    four,
}
// 手动赋值不要写重复的值
console.log(NumberType);

// 枚举有两种类型： 常数项 与 计算所得项
// ！！！注意 计算所得项后不能放未手动赋值的项，否则会因为无法获得初始值而报错
enum Color{
    red,
    blue = 'blue'.length,
    yellow = 123  //这里如果未手动赋值，前一项会报错
}


// 常数枚举是使用 const enum 定义的枚举类型
// 常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且 不能包含计算成员
const enum Directions {
    Up,
    Down,
    Left,
    Right=1+1
}
console.log(Directions.Up)

// 外部枚举（Ambient Enums）是使用 declare enum 定义的枚举类型
// declare 定义的类型只会用于编译时的检查，编译结果中会被删除
// 外部枚举与声明语句一样，常出现在声明文件中
declare enum ABC{
    a,b,c
}
console.log(ABC.a);