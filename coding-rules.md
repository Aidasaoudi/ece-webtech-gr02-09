# Coding rules

<ol>
<li>Write everything in <b>english</b></li>
<li>Use <b>tabulations</b> to indent (not spaces).</li>
<details open>
	<summary>You can auto-indent your code using a formatter</summary>
	<table>
		<tr>
			<td>MacOS</td>
			<td>Shift + Alt + F</td>
		</tr>
		<tr>
			<td>Windows</td>
			<td>Shift + Alt + F</td>
		</tr>
		<tr>
			<td>Linux</td>
			<td>Ctrl + Shift + I</td>
		</tr>
	</table>
</details>

<li>Avoid having more than 400 lines per file</li>
<li>
<details>
	<summary>Use <b><a href="https://en.wikipedia.org/wiki/Snake_case" target="_blank">snake case</a> for functions and variables</b>, and <b><a href="https://en.wikipedia.org/wiki/Camel_case" target="_blank">camel case</a> for classes</b> (applicable to <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank">hooks</a>)</summary>
	
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
	<summary>You'd rather <b>not use brackets for one-lined</b> conditions, loops or functions (prefer arrow function in this case)</summary>

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
	return true;
}
```
</details></li>

<li><details>
	<summary>You'd rather <b>put the bracket on the same line</b></summary>

```js
// Correct
function my_function() {
	// ...
	return true;
}
// DON'T
function my_function()
{
	// ...
	return true;
}
```
</details></li>

<li>You'd rather <b>use <a href="https://www.hostinger.com/tutorials/difference-between-inline-external-and-internal-css" target="_blank">internal CSS than inline CSS</a></b></li>

</ol>