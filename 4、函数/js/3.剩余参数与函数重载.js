// 剩余参数
function f3(a, ...items) {
    console.log(a, items);
}
f3("", 1, 2, 3, 4);
function fun3(a, b) {
    if (typeof a == 'string' && typeof b == 'string') {
        return a + b;
    }
    else if (typeof a == 'number' && typeof b == 'number') {
        return a + b;
    }
}
console.log(fun3('刘', '金升'));
console.log(fun3(1, 2));
