//类型别名 type
type s = string;
let a:s = "nihao";

//联合类型也可起别名
type all = number | string | boolean;
let b:all = 12;
b = "123";
b = false;