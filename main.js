
const button = document.querySelector("#Run");
button.addEventListener("click", () => {
	const array = [0, 1, 3];
	const el = [3, "whatever", 4];
	const out = document.querySelector(".output");
	//out.textContent = myIncludes(array, el[0]);
	//out.textContent = myIndexOf(array, el[0]);
	myPush(array, el);
	out.textContent = array;
	/* //Not working
	const input = document.querySelector(".input");
	const array = input.textContent;//.split(",");
	const argument = document.querySelector(".argument");
	const args = argument.innerHTML;//.split(",");
	console.log(input, args, array);
	let func = args[0];
	console.log(func, input, args, array);
	args.slice(1); //found this useful function online, let's me delete the top element!
	const out = document.querySelector(".output");
	if(func == "myIncludes") {
		out.textContent = myIncludes(array, ...args);
	}
	else if(func == "myIndexOf") {
		out.textContent = myIndexOf(array, ...args);
	}
	else if(func == "myPush") {
		myPush(array, ...args);
		out.textContent = array;
	}
	else {
		out.textContent = "Invalid Usage";
	}
	console.log(func, input, args);*/
});