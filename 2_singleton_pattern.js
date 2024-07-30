// 单例模式（Singleton Pattern）涉及到一个单一的类，该类负责创建自己的对象，同时确保只有单个对象被创建。这个类提供了一种访问其唯一对象的方式，
// 可以直接访问，不需要实例化该类的对象。

let box
const createBox = (_a, _b) => {
    if (!box) {
        box = {}
    }
    box.a = _a
    box.b = _b

    return box
}

const obj1 = createBox(3, 6)
console.log(obj1)

const obj2 = createBox(10, 20)
console.log(obj1)
console.log(obj2)

// 可见，单例模式可以创建多个实例，但是，只要改变其中任一实例对象的属性值，其他所有的实例对象的属性值都变了