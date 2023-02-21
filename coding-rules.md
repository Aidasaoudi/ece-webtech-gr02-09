# Coding rules

<ol>
<li>Write everything in <b>english</b></li>
<li>Use <b>tabulations</b> to indent (not spaces).</li>
<details open>
	<summary><u>You can auto-indent your code using a formatter<u></summary>
	<ul>
		<li>MacOS :	Shift + Alt + F</li>
		<li>Windows :	Shift + Alt + F</li>
		<li>Linux :	Ctrl + Shift + I</li>
	<ul>
</details>

<li>Avoid having more than 400 lines per file</li>
<li>
<details>
	<summary>Use <b><a href="https://en.wikipedia.org/wiki/Snake_case" target="_blank">snake case</a> for functions and variables</b>, and <b><a href="https://en.wikipedia.org/wiki/Camel_case" target="_blank">camel case</a> for classes</b> (applicable to <b><a href="https://reactjs.org/docs/hooks-intro.html" target="_blank">hooks</a>)</summary>
	
```js
// Correct
function my_function() {
	// ...
	return true;
}
// DON'T
function MyFunction() {
	// ...
	return true;
}

// Correct
function MyHook() {
	// ...
	return <img/>;
}
// DON'T
function my_hook() {
	// ...
	return <img/>;
}
```
</details></li>
<li><details>
	<summary>You'd rather not use brackets for one-lined conditions or loops, nor for one-lined function (prefer arrow function in this case)</summary>

```js
// Correct
if (test)
	return true;

// Correct
if (test) return true;

// DON'T
if (test) {
	return true;
}

// Correct
const func = () => true;
const MyHook = () => <img/>;

// DON'T
function my_function() {
	// ...
	return true;
}
```
</details></li>

<li><details>
	<summary>You'd rather put the bracket on the same line</summary>

```js
// Correct
function my_function() {
	// ...
	return true;
}
// DON'T
function MyFunction() {
	// ...
	return true;
}
```
</details></li>

<li>You'd rather use <a href="https://www.hostinger.com/tutorials/difference-between-inline-external-and-internal-css" target="_blank">internal CSS than inline CSS</a> for styling</li>

</ol>