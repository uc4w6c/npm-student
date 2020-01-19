var app = function() {}
app.say = function(name, age) {
    return name + 'は' + age + '歳です。';
}

console.log(app.say('Taro', 16));
console.log(app.say.apply(app, ['Taro', 16]));
console.log(app.say.call(app, 'Taro', 16));
var say = app.say.bind(app, 'Taro', 16);
console.log(say());
