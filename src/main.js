require("jquery");
require("handlebars/runtime");

var demo = require('./demo.js');
document.querySelector("#root").appendChild(demo());

var compiled = require('./hello.handlebars');
var html = compiled({name: "zhen ge"});
$('body').html(html);