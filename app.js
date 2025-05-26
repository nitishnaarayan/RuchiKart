import React from "react";
import ReactDOM from "react-dom/client";
const parent = (
	<h1 className="heading " tabIndex="5">
		This is Js 👌👌
	</h1>
);
const Pat = () => (
	<h1 className="hing " tabIndex="5">
		This is Css❤️❤️
	</h1>
);

const GrandParent = () => (
	<div className="container">
		{Pat()}
		<Pat />
		<Pat></Pat>

		<h1 className="heading1">THis is Js</h1>
	</div>
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GrandParent />);
