// 可以将装饰器理解为游戏人物购买的装备，例如LOL中的英雄刚开始游戏时只有基础的攻击力和法强。但是在购买的装备后，在触发攻击和技能时，能够享受到装备带来的输出加成。我们可以理解为购买的装备给英雄的攻击和技能的相关方法进行了装饰。
// 装饰器模式用于扩展对象的功能，而无需修改现有的类或构造函数。此模式可用于将特征添加到对象中，而无需修改底层的代码。
class HorribleCode {
    @newCode
    control() {
        console.log('我是一堆老逻辑')
    }
}

function newCode(target, name, descriptor) {
    console.log(1111, target, name, descriptor)
    let originalMethod = descriptor.value
    descriptor.value = function () {
        console.log('我是Func的装饰器逻辑')
        console.log('我是新的逻辑')
        return originalMethod.apply(this, arguments)
    }
    return descriptor
}

const horribleCode = new HorribleCode()
horribleCode.control()