//object表示非原始类型，出number、boolean、string之外的类型
let obj = {};
//obj = 123 报错
//obj = "123" 报错
//obj = false; 报错
//obj = null; 现版本报错
//obj = undefined; 现版本错误
obj = [];
obj = new String();
obj = String;
