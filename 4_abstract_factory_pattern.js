// 抽象工厂模式：通过对类的工厂抽象使其业务用于对产品类簇的创建，而不是负责创建某一类产品的实例。关键在于使用抽象类制定了实例的结构，调用者直接面向实例的结构编程，从实例的具体实现中解耦。
// 抽象工厂模式的优缺点：
// 优点：抽象产品类将产品的结构抽象出来，访问者不需要知道产品的具体实现，只需要面向产品的结构编程即可，从产品的具体实现中解耦；
// 缺点：
// 扩展新类簇的产品类比较困难，因为需要创建新的抽象产品类，并且还要修改工厂类，违反开放封闭原则
// 带来了系统复杂度，增加了新的类，和新的继承关系；
// 抽象工厂模式的使用场景：如果一组实例都有相同的结构，那么就可以使用抽象工厂模式。

// 抽象工厂模式与工厂模式的区别：
// 工厂模式 主要关注单独的产品实例的创建；
// 抽象工厂模式 主要关注产品类簇实例的创建，如果产品类簇只有一个产品，那么这时的抽象工厂模式就退化为工厂模式了

// class AbstractClass1 {
//     constructor() {
//         if (new.target === AbstractClass1) {
//             throw new Error('抽象类不能直接实例化!')
//         }
//     }

//     operate() { throw new Error('抽象方法不能调用!') }
// }

// const abstractClass1 = new AbstractClass1()

// const AbstractClass2 = function () {
//     if (new.target === AbstractClass2) {
//         throw new Error('抽象类不能直接实例化!')
//     }
// }

// AbstractClass2.prototype.operate = function () { throw new Error('抽象方法不能调用!') }
// const abstractClass2 = new AbstractClass2()


class AbstractRestaurant {
    constructor() {
        if (new.target === AbstractRestaurant) {
            throw new Error('抽象类不能直接实例化!')
        }
        this.signborad = '饭店'
    }
    // 抽象方法：创建菜
    createDish() { throw new Error('抽象方法不能调用!') }

    // 抽象方法：创建汤
    createSoup() { throw new Error('抽象方法不能调用!') }
}

class Restaurant extends AbstractRestaurant {
    constructor() { super() }
    static orderDish(type) {
        switch (type) {
            case '鱼香肉丝':
                return new YuXiangRouSi();
            case '宫保鸡丁':
                return new GongBaoJiDin();
            default:
                throw new Error('本店没有这个')
        }
    }

    createSoup(type) {
        switch (type) {
            case '紫菜蛋汤':
                return new ZiCaiDanTang();
            default:
                throw new Error('本店没这个汤');
        }
    }
}



class AbstractDish {
    constructor() {
        if (new.target === AbstractDish) {
            throw new Error('抽象类不能直接实例化!')
        }
        this.kind = '菜'
    }

    // 抽象方法
    eat() { throw new Error('抽象方法不能调用!') }
}

class YuXiangRouSi extends AbstractDish {
    constructor() {
        super()
        this.type = '鱼香肉丝'
    }
    eat() { console.log(this.kind + ' - ' + this.type + ' 真香') }
}


class GongBaoJiDin extends AbstractDish {
    constructor() {
        super();
        this.type = '宫保鸡丁';
    }
    eat() { console.log(this.kind + ' - ' + this.type + ' 让我想起了外婆做的菜') }
}


class AbstractSoup {
    constructor() {
        if (new.target === AbstractDish) {
            throw new Error('抽象类不能直接实例化!')
        }
        this.kind = '汤'
    }
    // 抽象方法
    drink() { throw new Error('抽象方法不能调用!') }
}


class ZiCaiDanTang extends AbstractSoup {
    constructor() {
        super()
        this.type = '紫菜蛋汤'
    }
    drink() { console.log(this.kind + ' - ' + this.type + ' 我从小喝到大') }
}

const restaurant = new Restaurant();

const soup1 = restaurant.createSoup('紫菜蛋汤');
soup1.drink();


// const dish0 = new Dish();


const dish1 = restaurant.createDish('鱼香肉丝');
dish1.eat();
// 菜 - 鱼香肉丝 真香

const dish2 = restaurant.createDish('红烧排骨');
// Error 本店没有这个