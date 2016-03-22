/*var $ = require("jquery");

$("body").html("Hello");*/

// ================================
// Load Button Template
/*import Button from "./Components/Button";

const button = new Button("google.com");
button.render("a");*/
// ================================

// ================================
// Load module on-demand
if (document.querySelectorAll('a').length) {
	require.ensure([], () => {
		const Button = require('./Components/Button');
		const button = new Button('google.com');

		button.render('a');
	});
}

if (document.querySelectorAll("h1").length) {
	require.ensure([], () => {
		const Header = require("./Components/Header");

		new Header().render("h1");
	})
}
// ================================

