// 一、?可选参数 必选参数必须放在可选参数之前
// 二、默认参数  默认参数可以放在可选参数后
let fun4 = function (a, b, c = '升') {
    return a + b + c;
};
console.log(fun4('刘'));
