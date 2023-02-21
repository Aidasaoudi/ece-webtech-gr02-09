# Coding rules

1. Write everything in **english**
2. Use **tabulations** to indent (not spaces).
<details open>
</summary>
! You can auto-indent your code using a formatter
</summary>
	- MacOS :	Shift + Alt + F
	- Windows :	Shift + Alt + F
	- Linux :	Ctrl + Shift + I
</details>

3. Avoid having more than 400 lines per file
4. Use **[snake case](https://en.wikipedia.org/wiki/Snake_case) for functions and variables**, and **[camel case](https://en.wikipedia.org/wiki/Camel_case) for classes** (applicable to [hooks](https://reactjs.org/docs/hooks-intro.html))
??? question "Examples"
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

5. You'd rather not use brackets for one-lined conditions or loops, nor for one-lined function (prefer arrow function in this case)
??? question "Examples"
	```js
	// Correct
	if(test)
		return true;

	// Correct
	if(test)	return true;

	// DON'T
	if(test) {
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

6. You'd rather put the bracket on the same line when needed
??? question "Examples"
	```js
	// Correct
	function my_function() {
		// ...
		return true;
	}
	// DON'T
	function MyFunction()
	{
		// ...
		return true;
	}
	```

7. You'd rather use [internal CSS than inline CSS](https://www.hostinger.com/tutorials/difference-between-inline-external-and-internal-css) for styling