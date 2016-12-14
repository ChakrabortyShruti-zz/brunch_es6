var addValueToList = (value) => {
	let ul = document.getElementById('items');
	let li = document.createElement("li");
	li.append(value);
	ul.append(li);
}

let form = document.getElementsByClassName("form")[0];
form.addEventListener('submit',() => {
	let enteredValue = document.getElementsByTagName("input")[0].value;
	addValueToList(enteredValue);
	form.reset();
});
