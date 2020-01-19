var mixin = require('merge-descriptors');
var EventEmitter = require('events').EventEmitter;

var app = function() {};

mixin(app, EventEmitter.prototype, false);
app.init = function() {
    app.on('mount', () => {
        console.log('on!');
    });
    console.log('init')
}
app.send = function() {
    app.emit('mount');
}
app.init();
app.send();
