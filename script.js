//your code here
let newtodo = document.getElementById('newTodoInput');
let ol = document.getElementById('todoList');
let addbtn = document.getElementById('addTodoBtn');
let arrList = [];

addbtn.addEventListener("click",()=>{
	if (newtodo.value.trim() !== "") {
		ol.innerText ="";
		arrList.push(newtodo.value);
		newtodo.value="";
		arrList.forEach(item=>{
			let li = document.createElement('li');
			li.innerText = `${item}`
			ol.appendChild(li);
		})
	}
})

