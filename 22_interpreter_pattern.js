// 解释器模式：给定一个语言, 定义它的文法的一种表示，并定义一个解释器, 该解释器使用该表示来解释语言中的句子。
class Context {
    constructor() {
        this._list = []
        this._sum = 0
    }
    get sum() {
        return this._sum;
    }
    set sum(newValue) {
        this._sum = newValue;
    }
    add(expression) {
        this._list.push(expression);
    }
    get list() {
        return [...this._list];
    }
}

class PlusExpression {
    interpret(context) {
        if (!(context instanceof Context)) {
            throw new Error("TypeError");
        }
        context.sum = ++context.sum;
    }
}

class MinusExpression {
    interpret(context) {
        if (!(context instanceof Context)) {
            throw new Error("TypeError");
        }
        context.sum = --context.sum;
    }
}

const context = new Context()
context.add(new PlusExpression());
context.add(new PlusExpression());
context.add(new MinusExpression());

context.list.forEach(expression => expression.interpret(context))
console.log(context.sum);