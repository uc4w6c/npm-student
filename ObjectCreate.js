// expose the prototype that will get set on requests
/*
app.request = Object.create(req, {
    app: { configurable: true, enumerable: true, writable: true, value: app }
  })
*/

var app = function() {};
var req = function() {};
req.headers = function() {
    return 'req!';
}

// app.request = Object.create(req, {
    // app: { configurable: true, enumerable: true, writable: false, value: app }
// })
app.request = Object.create(req);
console.log(app.request.headers());
