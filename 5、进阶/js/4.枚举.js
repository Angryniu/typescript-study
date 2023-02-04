// 使用枚举类型给一组数值赋予名称
// 枚举可以通过名称取值，也可以通过值取名称
// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：
var NumberType;
(function (NumberType) {
    NumberType[NumberType["one"] = 1] = "one";
    NumberType[NumberType["tow"] = 2] = "tow";
    NumberType[NumberType["three"] = 10] = "three";
    NumberType[NumberType["four"] = 11] = "four";
})(NumberType || (NumberType = {}));
// 手动赋值不要写重复的值
console.log(NumberType);
// 枚举有两种类型： 常数项 与 计算所得项
// ！！！注意 计算所得项后不能放未手动赋值的项，否则会因为无法获得初始值而报错
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 'blue'.length] = "blue";
    Color[Color["yellow"] = 123] = "yellow"; //这里如果未手动赋值，前一项会报错
})(Color || (Color = {}));
console.log(0 /* Directions.Up */);
console.log(ABC.a);
