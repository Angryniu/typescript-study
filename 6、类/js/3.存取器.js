// 存取器，可以帮助我们控制对象成员的访问
class Name {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //设置存取器
    // 读取器 读取数据
    get fullName() {
        return this.firstName + '-' + this.lastName;
    }
    // 设置器 设置数据
    set fullName(value) {
        let names = value.split('-');
        this.firstName = names[0];
        this.lastName = names[1];
    }
}
const n = new Name('5', '67');
console.log(n.fullName);
n.fullName = '刘-某';
console.log(n.fullName);
