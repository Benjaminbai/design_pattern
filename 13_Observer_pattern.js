// 观察者模式又叫发布订阅模式，它定义了一种一对多的关系，让多个观察者对象同时监听某一个主题对象，这个主题对象的状态发生变化时就会通知所有的观察者对象，使得它们能够自动更新自己。
// 优点
// 时间上的解耦：注册的订阅行为由消息的发布方来决定何时调用，订阅者不用持续关注，当消息发生时发布者会负责通知
// 对象上的解耦 ：发布者不用提前知道消息的接受者是谁，发布者只需要遍历处理所有订阅该消息类型的订阅者发送消息即可（迭代器模式），由此解耦了发布者和订阅者之间的联系，互不持有，都依赖于抽象，不再依赖于具体；

// 缺点
// 增加消耗：创建结构和缓存订阅者这两个过程需要消耗计算和内存资源，即使订阅后始终没有触发，订阅者也会始终存在于内存；
// 增加复杂度 ：订阅者被缓存在一起，如果多个订阅者和发布者层层嵌套，那么程序将变得难以追踪和调试，参考一下 Vue 调试的时候你点开原型链时看到的 deps/subs/watchers 
// 缺点主要在于理解成本、运行效率、资源消耗，特别是在多级发布 - 订阅时，情况会变得更复杂。

// 观察者模式的使用场景：当一个对象的改变需要同时改变其它对象，并且它不知道具体有多少对象需要改变的时候，就应该考虑使用观察者模式。
function journal() {
    const fnList = []
    return {
        subscribe: (fn) => {
            const index = fnList.indexOf(fn)
            if (index != -1) return fnList
            fnList.push(fn);
            return fnList;
        },
        unsubscribe: (fn) => {
            const index = fnList.indexOf(fn)
            if (index === -1) return fnList
            fnList.splice(index, 1)
            return fnList
        },
        notify: () => {
            fnList.forEach(item => {
                item.update()
            })
        }
    }
}

const o = new journal()
function Observer(person, data) {
    return {
        update: () => {
            console.log(`${person}：${data}`);
        }
    }
}

const f1 = new Observer("张三", "今天天气不错");
const f2 = new Observer("李四", "我吃了三个汉堡");
const f3 = new Observer("王二", "你长得可真好看");


o.subscribe(f1);
o.subscribe(f2);
o.subscribe(f3);

o.unsubscribe(f1)
o.notify()