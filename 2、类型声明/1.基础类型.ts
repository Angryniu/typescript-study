
/*
    let num = 10;
    num = " ";    <--出现错误，ts会自动进行类型推断
*/

//类型声明 可以声明变量的类型 函数参数的类型
//类型声明之后，变量就只能存储对应类型的值
//let num:number = 10;


//一、原始类型
//1.布尔类型
let isFlag:boolean = false;

//2.数字类型
let num1:number = 10;//十进制
let num2:number = 0b1010; //二进制
let num3:number = 0o12; //八进制
let num4:number = 0xa; //十六进制

//3.字符串类型
let str:string = "str";

//4.undefined和null
let uF:undefined = undefined;
let NU:null = null;
//可以把null与undefined赋值给其他类型
let num:number = null;
num = undefined;