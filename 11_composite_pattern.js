// 组合模式允许你将对象组合成树形结构来表现整体和部分的层次结构，让使用者可以以一致的方式处理组合对象以及部分对象。

// 组合模式的适用场景：如果对象组织呈树形结构就可以考虑使用组合模式，特别是如果操作树中对象的方法比较类似时。


class Folder {
    constructor(name, children) {
        this.name = name
        this.children = children
    }

    // 在文件夹下增加文件或文件夹
    add(...fileOrFolder) {
        this.children.push(...fileOrFolder)
        return this
    }

    // 扫描方法
    scan(cb) {
        this.children.forEach(child => child.scan(cb))
    }
}


class File {
    constructor(name, size) {
        this.name = name
        this.size = size
    }

    // 在文件下增加文件，应报错
    add(...fileOrFolder) {
        throw new Error('文件下面不能再添加文件')
    }

    // 执行扫描方法
    scan(cb) {
        cb(this)
    }
}


const foldMovies = new Folder('电影', [
    new Folder('漫威英雄电影', [
        new File('钢铁侠.mp4', 1.9),
        new File('蜘蛛侠.mp4', 2.1),
        new File('金刚狼.mp4', 2.3),
        new File('黑寡妇.mp4', 1.9),
        new File('美国队长.mp4', 1.4)]),
    new Folder('DC英雄电影', [
        new File('蝙蝠侠.mp4', 2.4),
        new File('超人.mp4', 1.6)])
])

console.log('size 大于2G的文件有：')


foldMovies.scan(item => {
    if (item.size > 2) {
        console.log(`name:${item.name} size:${item.size}GB`)
    }
})