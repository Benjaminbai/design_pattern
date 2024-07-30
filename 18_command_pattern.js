// 命令模式的原理：将请求以命令的形式包裹在对象中，并传给调用对象。调用对象寻找可以处理该命令的合适的对象，并把该命令传给相应的对象，该对象执行命令。
// 优点：
// 降低对象之间的耦合度
// 新的命令可以很容易地加入到系统中。
// 可以比较容易地设计一个组合命令
// 调用同一方法实现不同的功能

// 缺点：
// 使用命令模式可能会导致某些系统有过多的具体命令类。

var CreateCommand = function (receiver) {
    this.receiver = receiver;
}


CreateCommand.prototype.execute = function () {
    this.receiver.action();
}

var TVOn = function () { }


TVOn.prototype.action = function () {
    alert("TVOn");
}

var TVOff = function () { }


TVOff.prototype.action = function () {
    alert("TVOff");
}


var Invoker = function (tvOnCommand, tvOffCommand) {
    this.tvOnCommand = tvOnCommand;
    this.tvOffCommand = tvOffCommand;
}


Invoker.prototype.tvOn = function () {
    this.tvOnCommand.execute();
}


Invoker.prototype.tvOff = function () {
    this.tvOffCommand.execute();
}

var tvOnCommand = new CreateCommand(new TVOn());
var tvOffCommand = new CreateCommand(new TVOff());
var invoker = new Invoker(tvOnCommand, tvOffCommand);


invoker.tvOn();
invoker.tvOff();