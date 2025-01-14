// 备忘录模式：在不破坏对象的封装性的前提下，在对象之外捕获并保存该对象内部的状态以便日后对象使用或者对象恢复到以前的某个状态

// 备忘录模式伪代码
var Page = function () {
    // 通过cache对象缓存数据
    var cache = {}
    return function (page, fn) {
        if (cache[page]) {
            showPage(page, cache[page])
        } else {
            $.post('/url', function (data) {
                showPage(page, data)
                cache[page] = data
            })
        }
        fn && fn()
    }
}