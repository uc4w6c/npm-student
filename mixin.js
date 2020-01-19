var mixin = require('merge-descriptors');

var app = function() {
};
var application = function() {}
application.handle = function() {
        return 'Hello mixin';
}

mixin(app, application, false);

console.log(app.handle());
