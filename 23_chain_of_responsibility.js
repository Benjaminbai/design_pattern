// 职责链模式：类似多米诺骨牌, 通过请求第一个条件, 会持续执行后续的条件, 直到返回结果为止。
// 作用域链：查找变量时，先从当前上下文的变量对象中查找，如果没有找到，就会从父级执行上下文的变量对象中查找，一直找到全局上下文的变量对象
// 原型链：当读取实例的属性时，如果找不到，就会查找当前对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止；
// 事件冒泡： 事件在 DOM 元素上触发后，会从最内层的元素开始发生，一直向外层元素传播，直到全局 document 对象

// 优点：
// 和命令模式类似，由于处理请求的职责节点可能是职责链上的任一节点，所以请求的发送者和接受者是解耦的；
// 通过改变链内的节点或调整节点次序，可以动态地修改责任链，符合开闭原则；

// 缺点：
// 并不能保证请求一定会被处理，有可能到最后一个节点还不能处理；
// 调试不便，调用层次会比较深，也有可能会导致循环引用；
class Leader {
    constructor() {
        this.nextLeader = null
    }
    setNext(next) {
        this.nextLeader = next
        return next
    }

}


class GroupLeader extends Leader {
    handle(duration) { }
}


class DepartmentLeader extends Leader {
    handle(duration) { }
}


class GeneralLeader extends Leader {
    handle(duration) { }
}


const zhangSan = new GroupLeader()
const liSi = new DepartmentLeader()
const wangWu = new GeneralLeader()


zhangSan.setNext(liSi).setNext(wangWu)