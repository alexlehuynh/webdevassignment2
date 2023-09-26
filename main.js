
const button = document.querySelector("#Run");

// button.addEventListener("click", () => {
// 	const array = [0, 1, 3];
// 	const el = [3, "whatever", 4];
// 	const out = document.querySelector(".output");
// 	//out.textContent = myIncludes(array, el[0]);
// 	//out.textContent = myIndexOf(array, el[0]);
// 	myPush(array, el);
// 	out.textContent = array;
// 	/* //Not working
// 	const input = document.querySelector(".input");
// 	const array = input.textContent;//.split(",");
// 	const argument = document.querySelector(".argument");
// 	const args = argument.innerHTML;//.split(",");
// 	console.log(input, args, array);
// 	let func = args[0];
// 	console.log(func, input, args, array);
// 	args.slice(1); //found this useful function online, let's me delete the top element!
// 	const out = document.querySelector(".output");
// 	if(func == "myIncludes") {
// 		out.textContent = myIncludes(array, ...args);
// 	}
// 	else if(func == "myIndexOf") {
// 		out.textContent = myIndexOf(array, ...args);
// 	}
// 	else if(func == "myPush") {
// 		myPush(array, ...args);
// 		out.textContent = array;
// 	}
// 	else {
// 		out.textContent = "Invalid Usage";
// 	}
// 	console.log(func, input, args);*/
// });

button.addEventListener("click", () => {
	// Access id="form1" then access input name="in"
	const input = document.querySelector("#form1").elements["in"];

	// Access value of "in" -> user text input
	const userArrayInput = input.value;

	// Parse user txt input to a character array
	const charArray = userArrayInput.split(" ");

	// Initialize empty array
	let intArray = new Array();

	// Parse character array's elements to integer
	for (let i = 0; i < charArray.length; i++) {
		intArray.push(parseInt(charArray[i]));
	}


	// Access output
	const output = document.querySelector("#output");

	let result = 0;

	// Sum values
	for (let i = 0; i < intArray.length; i++) {
		result += intArray[i];
	}

	// Assign result value to output text box
	output.textContent = result;

})