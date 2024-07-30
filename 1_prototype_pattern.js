// 原型模式（Prototype Pattern）是用于创建重复的对象，同时又能保证性能。
function Person() {
    Person.prototype.name = 'marry'
    Person.prototype.sayName = function () {
        console.log(this.name)
    }
}

const person1 = new Person()
const person2 = new Person()

person1.sayName()
person2.sayName()

console.log(111111, person1.sayName === person2.sayName)