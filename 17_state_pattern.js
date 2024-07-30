// 状态模式：当一个对象的内部状态发生改变时，会导致其行为的改变，这看起来像是改变了对象。
// 优点：
// 结构相比之下清晰，避免了过多的 switch-case 或 if-else 语句的使用，避免了程序的复杂性提高系统的可维护性；
// 符合开闭原则，每个状态都是一个子类，增加状态只需增加新的状态类即可，修改状态也只需修改对应状态类就可以了；
// 封装性良好，状态的切换在类的内部实现，外部的调用无需知道类内部如何实现状态和行为的变换；

// 缺点：引入了多余的类，每个状态都有对应的类，导致系统中类的个数增加。


var trafficLight = (function () {
    var currentLight = null;
    return {
        change: function (light) {
            currentLight = light;
            currentLight.go();
        }
    }
})();

function RedLight() { }
RedLight.prototype.go = function () {
    console.log("红灯");
}
function GreenLight() { }
GreenLight.prototype.go = function () {
    console.log("绿灯");
}
function YellowLight() { }
YellowLight.prototype.go = function () {
    console.log("黄灯");
}

trafficLight.change(new RedLight());
trafficLight.change(new YellowLight());