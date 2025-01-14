// 模板方法模式：父类中定义一组操作算法骨架，而将一些实现步骤延迟到子类中，使得子类可以不改变父类的算法结构的同时，重新定义算法中的某些实现步骤。模板方法模式的关键是算法步骤的骨架和具体实现分离

// 优点：
// 封装了不变部分，扩展可变部分，把算法中不变的部分封装到父类中直接实现，而可变的部分由子类继承后再具体实现；
// 提取了公共代码部分，易于维护，因为公共的方法被提取到了父类，那么如果我们需要修改算法中不变的步骤时，不需要到每一个子类中去修改，只要改一下对应父类即可；
// 行为被父类的模板方法固定，子类实例只负责执行模板方法，具备可扩展性，符合开闭原则；

// 缺点：增加了系统复杂度，主要是增加了的抽象类和类间联系，需要做好文档工作；
var Beverage = function () { }

Beverage.prototype.boilWater = function () {
    console.log('把水煮沸');
};

Beverage.prototype.brew = function () {
    throw new Error('子类必须重写brew方法');
};

Beverage.prototype.pourInCup = function () {
    throw new Error('子类必须重写pourInCup方法');
};

Beverage.prototype.addCondiments = function () {
    throw new Error('子类必须重写addCondiments方法');
};

Beverage.prototype.customerWantsCondiments = function () {
    return true; // 默认需要调料
}

Beverage.prototype.init = function () {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (this.customerWantsCondiments()) { // 如果挂钩返回true，则需要调料
        this.addCondiments();
    }
};

var CoffeeWithHook = function () { }
CoffeeWithHook.prototype = new Beverage()

CoffeeWithHook.prototype.brew = function () {
    console.log('用沸水冲泡咖啡');
}

CoffeeWithHook.prototype.pourInCup = function () {
    console.log('把咖啡倒进杯子');
}

CoffeeWithHook.prototype.addCondiments = function () {
    console.log('加糖和牛奶');
}

CoffeeWithHook.prototype.customerWantsCondiments = function () {
    return window.confirm('请问需要调料吗？');
}

var coffeeWithHook = new CoffeeWithHook();
coffeeWithHook.init();