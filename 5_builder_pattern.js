// 建造者模式用于：分步构建一个复杂的对象，将一个复杂对象的 构建层与其表示层分离。若不是极其复杂的对象，应选择使用对象字面或工厂模式等方式创建对象
// 实现原理：通常使用链式调用来进行建造过程，最后调用 build() 方法生成最终对象。
// 建造者模式的优缺点：
// 优点：
// 封装性好，创建和使用分离；
// 扩展性好，建造类之间独立、一定程度上解耦。

// 缺点：
// 产生多余的Builder对象；
// 产品内部发生变化，建造者都要修改，成本较大。

// 建造者模式的适用场景：
// 相同的方法，不同的执行顺序，产生不一样的产品时，可以采用建造者模式；
// 产品的组成部件类似，通过组装不同的组件获得不同产品时，可以采用建造者模式；

// 建造者模式 与 工厂模式 的区别：
// 工厂模式关注的是创建的结果
// 建造者模式不仅得到了结果，同时也参与了创建的具体过程。


class CarBuilder {
    constructor({ color = 'white', weight = 0 }) {
        this.color = color;
        this.weight = weight;
    }

    buildTyre(type) {
        const tyre = {}
        switch (type) {
            case 'small':
                tyre.tyreType = '小号轮胎'
                tyre.tyreIntro = '正在使用小号轮胎'
                break
            case 'normal':
                tyre.tyreType = '中号轮胎'
                tyre.tyreIntro = '正在使用中号轮胎'
                break
            case 'big':
                tyre.tyreType = '大号轮胎'
                tyre.tyreIntro = '正在使用大号轮胎'
                break
        }
        this.tyre = tyre;
    }

    buildEngine(type) {
        const engine = {}
        switch (type) {
            case 'small':
                engine.engineType = '小马力发动机'
                engine.engineIntro = '正在使用小马力发动机'
                break
            case 'normal':
                engine.engineType = '中马力发动机'
                engine.engineIntro = '正在使用中马力发动机'
                break
            case 'big':
                engine.engineType = '大马力发动机'
                engine.engineIntro = '正在使用大马力发动机'
                break
        }
        this.engine = engine
    }
}


class BenChiDirector {
    constructor(tyre, engine, param) {
        const car = new CarBuilder(param);
        car.buildTyre(tyre);
        car.buildEngine(engine);
        return car;
    }
};


const benchi = new BenChiDirector('small', 'big', { color: 'red', weight: '1600kg' });
 
console.log(benchi);

// 【总结归纳】建造者模式的通用实现：

// Director：指挥者，调用建造者中的部件具体实现进行部件装配，相当于整车组装厂，最终返回装配完毕的产品。
// Builder： 建造者，含有不同部件的生产方式给指挥者调用，是部件真正的生产者，但没有部件的装配流程。
// Product：产品，要返回给访问者的复杂对象。