//ts在没有进行类型声明时会推断一个类型，共两种情况

//1、定义变量时直接赋值，则定义类型为对应类型
let num6 = 1;
let str6 = '123';

//2、定义变量时没有赋值则为any类型
let a6;
a6=10;
a6="123";
a6={};
a6=[];
a6=false;