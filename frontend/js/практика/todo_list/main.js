let  taskArrays = [];

const button = document.querySelector('.buttonAdd')
button.addEventListener('click',submitButtonClicked);


function submitButtonClicked(){
    const inputValue = document.querySelector('.textField');
    taskArrays.push(inputValue.value);
    taskArrays.forEach((task) => {
        console.log(task)
    })
}

function renderTask(task){
    const header = querySelector('.header')

    const div = createElement('div')
    div.className += 'Tasks'

    const spanTask = querySelector('span')
    spanTask.className += 'task'

    div.appendChild(spanTask)
    header.afterChild(div)


}
const header = document.querySelector('.header')

const div = document.createElement('div')
div.className += 'Tasks'

const spanTask = document.createElement('span')
spanTask.textContent = 'sdssd'
spanTask.classList.add('textField, task')


div.append(spanTask)
header.after(div)
