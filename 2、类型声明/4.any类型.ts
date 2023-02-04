//any类型 任何类型
let a:any = 123;
a='123';
a=[];
a=false;
a={}

let aa1:Array<any> = [4,'2',true];
let aa2:any[] = [3,'3',true];  //<--此处是存在缺陷的，例如aa2[3]使用split函数是会出错的

