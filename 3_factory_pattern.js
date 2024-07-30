// 工厂模式：根据不同的输入返回不同类的实例，一般用来创建同一类对象。
// 工厂方式的主要思想是将对象的创建与对象的实现分离
class Restaurant {
    constructor() {
        this.menuData = {}
    }
    getMenu(menu) {
        if (!this.menuData[menu]) {
            throw new Error('这个菜本店没有')
        };
        const { type, message } = this.menuData[menu];
        return new Menu(type, message);
    }

    addMenu(menu, type, message) {
        if (this.menuData[menu]) {
            console.Info('已经有这个菜了!')
            return
        };
        this.menuData[menu] = { type, message }
    }

    removeMenu(menu) {
        if (!this.menuData[menu]) return
        delete this.menuData[menu]
    }
}


class Menu {
    constructor(type, message) {
        this.type = type
        this.message = message
    }
    eat() {
        console.log(this.type + this.message)
    }
}

const restaurant = new Restaurant();

restaurant.addMenu('YuXiangRouSi', '鱼香肉丝', ' 真香');		
restaurant.addMenu('GongBaoJiDin', '宫保鸡丁', ' 让我想起了外婆做的菜');


const dish1 = restaurant.getMenu('YuXiangRouSi');
dish1.eat();


const dish2 = restaurant.getMenu('HongSaoPaiGu');