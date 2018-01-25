/************* ES6 Notes **************/
## 1. What is ECMAScript 6?
- ES6 = ECMAScript 6: the lasted version of the specification for JS.
- ECMA = European Computer Manufacturer Association
- ES6 browser support:
	+ All of these new ES6 features are not supported by all of these browsers. So ES6 code needs to be transpiled in to ES5 before we try to render it in a browser.
- Using ES6:
	+ Transpiling ES6:
		- Convert ES6 => ES5
		- TRanspiling for languages like CoffeeScript and TypeScript
		- Transpiling  tools:
			Babels.js
			Traceur
			Closure
## 2. Transpiling ES6:
- Introduction to Babel:
	+ ES6 code in -> ES5 code out
	+ Created by Sebastian McKenzie
	+ Used frequently with React
- In-browser Babel transpiling
	+ Link: babeljs.io
	+ Use Babel:
		- Grab the CND link for the Babel In Browser Transformer from "cdnjs.com"
		- Copy CND link to : <script src="CND link" ></script>
		- Import file script with type= "text/babel"
- Transpiling ES6 with babel and babel-node:
	+ To use real Babel:
		- Install Babel with NPM: npm install -g babel : global for any project.
		- babel <name_file> --out-file <name_out_file>
			+ Babel will transpiling ES6 code from <name_file> to ES5 code in <name_out_file>
			+ Ex: babel script.js --out-file script-compiled.js

- Transpiling with Webpack
	+ Create package.json: npm init
	+ Install Webpack with npm administrator : npm install -g --save webpack
	+ Install babel-loader: npm install -g --save babel-loader
	+ Install babel-core: npm install babel-core --save
	+ Create webpack.config.js
		- entry: is script.js file
		- output: is an object, {filename: 'bundle.js'}
		- module: is an object, {loaders: [{test: /\.js?/, loader:'babel-loader', exclude:/node_modules/}]}
			test: make sure that test for any files end in .js

	+ Command: webpack : transpiling ES6 to ES5
	+ When I change in file script.js, run again "webpack", webpack will transpiling.

## 3. ES6 Syntax
- Strict mode
	+ Use ES6, should turn on 'strict mode' by 'use strict' key word in file script that use ES6.
	+ Strict mode has 2 scope: local and global.
- Let keyword:
	+ Let helps us deal with some real world problems that arise form block scoping.
	+ Block scope:  it only work within the scope declares by the {}.
- Const keyword:
	+ Can not declare both
		const a = 5;
		var a = 4;
	+ Const has block-scope (same let).
- Template strings:
	+ Allow you to tap into functionality of template languages to format your JS code with variable.
	+ Use a backtick to begin and end a string.
	+ Variable is wraped in curly braces and preceded by a dollar sign.
	Ex: `Hello ${name}`
	+ All of the extra space, line breaks, indentions are occurring properly.
- Spread operators:
	+ Add the array elements to the new array, use spread operator by three dots.
	Ex: var arr1 =["a1", "a2"];
	var arr2 = ["b1", "b2", ...arr1]

## 4. ES6 Functions and Objects
- Default function parameters:
	+ When I call a function without passing values, the function will use the default values.
- Enhancing object literals:
	+ var object = { functionName(para){ //code for function }}
	+ console.log("Hello".repeat(times));
	+ repeat is a new ES6 method, repeat times
- Arrow functions:
	+ Have an abbreviated syntax for working with functions
	+ Syntax: var nameFunction  = (parameters) => {statements}
	+ (paras) => expression
		same as: (paras) => {return expression;}
	+ No para, must have ():
- Arrow function and the "this" scope:
	+ Arrow function can help us deal with the scope of the "this" keyword in our JS code.
	+ Ex:
	function Person() {
	  // The Person() constructor defines `this` as an instance of itself.
	  this.age = 0;

	  setInterval(function growUp() {
	    // In non-strict mode, the growUp() function defines `this`
	    // as the global object, which is different from the `this` defined by the Person() constructor.
	    this.age++;
	  }, 1000);
	}
	+ So, if you want to 'this' of the function can't be overriden, you could:
		- `var _this = this` in that function, before starting sub function.
		- use bind method in the end of the sub function. All functions in JS have a bind method, which allow you to specify the value for this. Once a function has been “bound” the context can’t be overriden, meaning that we have a guarantee that this will refer to the correct thing.
		- Use arrow function for the sub function.
- Destructuring assignment:
	+ create variable from array or object by one line easily.
	+ 1 Array => variables
		let [var1, var2, var3] = Array;
	+ 1 Object => variables
		let [key1: var1, key2: var2] = {key1: val1, key2: val2};
		=> that mean: var1 = val1; var2 = val2  
- Generators:
	+ Generators are a new type of function that allow us to pause function in the middle of execution, to be resumed later.
	+ generators are used when we're dealing with some sort asynchronous event. Maybe it's an external event or maybe a timer.
	+ Function *
	+ Add src = "https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.23.0/polyfill.min.js" to script tag
	+ yield :
	+ return Generator object
	+ The function don't execute as soon as the function is called. Generator function returns 'iterator' same as pointer in loop.
	+ When function next() of iterator is call, generator function executes until meet first 'yield' key word. yield return value to iterator, generator function ends when there is no value to yield.

## 5. ES6 Classes
- ES6 class syntax:
	+ Create class:
		class <name_class>{
			//Method for class
		}
	+ Create a new instance from Class:
		var instance1 = new <name_class>
- Class inheritance:
	+ Create class inheritance:
		class <name_class> extends <name_parent_class>
	+ Class inheritance has the same properties and methods as parent class
	+ super key word: used to call function from parent class
- Creating React.js components with ES6 classes
	+ React.js is an increasingly popular JS library that helps you build user interfaces.
	+ Add React CDN link: https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react.min.js
	+ Create React component:
		- Syntax:
		var <name_Component> = React.createClass(
		{
			render: function() {
				//This is just a function that's going return something.
				//Maybe it will return some UI elements for us

			}
		});

		- createClass: is the method that takes in an object
		 Every React component has a render method.
	+ Render component:
		- Syntax: React.render(<name_compo></name_compo>, document.body);

## 6. Rest parameters
- Create a function with quality of parameters is undefined.
function NameFunc (para1, para2, ...other) {}
other is a rest parameter of function, other is the array that includes parameters are not declared.

## 7. Collection Sets
- Value inputs are optional and quickly.
- Each item has a different value.
- Create set: var mySet = new Set();
- Add item: mySet.add(value);
- Delete item: mySet.delete(value);
- Check has value: mySet.has(value);
- Count total item: mySet.size;
- Delete all items: mySet.clear();
- Set => Arr:
	let myArr = [...mySet];
- Arr => Set:
	let mySet = new Set(myArr);
