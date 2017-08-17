module.exports = function() {
	var demo = document.createElement('div');
	demo.textContent = "Hello World";
	$("div").css("font-size", "28px");
	return demo;
}