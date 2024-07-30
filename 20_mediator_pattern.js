// 中介者模式：用一个中介对象来封装多个对象之间的复杂交互。中介者将对象与对象之间紧密的耦合关系变得松散，从而可以独立地改变他们。

// 优点：
// 松散耦合，降低了同事对象之间的相互依赖和耦合，不会像之前那样牵一发动全身；
// 将同事对象间的一对多关联转变为一对一的关联，符合最少知识原则，提高系统的灵活性，使得系统易于维护和扩展
// 中介者在同事对象间起到了控制和协调的作用，因此可以结合代理模式那样，进行同事对象间的访问控制、功能扩展；
// 因为同事对象间不需要相互引用，因此也可以简化同事对象的设计和实现；


// 缺点
// 逻辑过度集中化，当同事对象太多时，中介者的职责将很重，逻辑变得复杂而庞大，以至于难以维护；
// 当出现中介者可维护性变差的情况时，考虑是否在系统设计上不合理，从而简化系统设计，优化并重构，避免中介者出现职责过重的情况；


// 男方
const ZhangXiaoShuai = {
    name: '张小帅',
    family: '张小帅家',
    info: { age: 25, height: 171, salary: 5000 },
    target: { age: [23, 27] }
}

// 男方家长
const ZhangXiaoShuaiParent = {
    name: '张小帅家长',
    family: '张小帅家',
    info: null,
    target: { height: [160, 167] }
}

// 女方
const LiXiaoMei = {
    name: '李小美',
    family: '李小美家',
    info: { age: 23, height: 160 },
    target: { age: [25, 27] }
}

// 女方家长
const LiXiaoMeiParent = {
    name: '李小美家长',
    family: '李小美家',
    info: null,
    target: { salary: [10000, 20000] }
}


const MatchMaker = {
    matchBook: {},
    registPersons(...personList) {
        personList.forEach(person => {
            // 将家长和孩子放到一起存入花名册
            if (this.matchBook[person.family]) {
                this.matchBook[person.family].push(person)
            } else {
                this.matchBook[person.family] = [person]
            }
        })
    },
    checkAllPurpose() {
        Object.keys(this.matchBook)
            // 遍历名册中所有家庭
            .forEach((familyName, idx, matchList) => matchList
                // 对于其中一个家庭，过滤出名册中其他的家庭
                .filter(match => match !== familyName)
                // 遍历该家庭中注册到名册上的所有成员
                .forEach(enemyFamily => this.matchBook[enemyFamily]
                    .forEach(enemy => this.matchBook[familyName]
                        // 逐项比较自己的条件和他们的要求
                        .forEach(person =>
                            enemy.info && this.checkPurpose(person, enemy)
                        )
                    ))
            )
    },
    checkPurpose(person, enemy) {
        // 对可枚举属性进行遍历操作，确认是否全部符合条件
        const result = Object.keys(person.target).every(key => {
            const [low, high] = person.target[key]
            return low <= enemy.info[key] && enemy.info[key] <= high
        })
        // 通知对方
        this.receiveResult(result, person, enemy)
    },
    receiveResult(result, person, enemy) {
        result
            ? console.log(`${person.name} 觉得合适~ \t（${enemy.name} 已经满足要求）`)
            : console.log(`${person.name} 觉得不合适! \t（${enemy.name} 不能满足要求！）`)
    }
}


MatchMaker.registPersons(ZhangXiaoShuai, ZhangXiaoShuaiParent, LiXiaoMei, LiXiaoMeiParent)
MatchMaker.checkAllPurpose()