//联合类型表示变量的类型可以是多种类型的一种 |
let a7 = "123";
//再次赋值，会进行类型推断，相应类型使用相应的方法 
a7 = 123;
a7 = "456";
a7.split("");
//或者使用联合类型通用的方法
a7.toString();
