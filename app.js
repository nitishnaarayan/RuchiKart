import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
	React.createElement("div", { id: "child" }, [
		React.createElement("h1", {}, "This is H1"),
		React.createElement("h2", {}, "This is H2"),
	]),
	React.createElement("div", { id: "parent" }, [
		React.createElement("h2", {}, "this is h1 for p for div 2"),
		React.createElement("h3", {}, "This is h3"),
	]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
