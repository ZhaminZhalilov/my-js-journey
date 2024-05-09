let taskArrays = [];

const button = document.querySelector('.buttonAdd')
button.addEventListener('click',addTask);


function addTask(){
    const inputValue = document.querySelector('textField').value;
    taskArrays.push(inputValue);
    console.log(taskArrays)
}
console.log(button)
