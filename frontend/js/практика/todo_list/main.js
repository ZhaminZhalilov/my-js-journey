let  taskArrays = [];

const button = document.querySelector('.buttonAdd');
button.addEventListener('click',submitButtonClicked);


function submitButtonClicked(){
    const inputValue = document.querySelector('.textField');
    taskArrays.push(inputValue.value);

    renderTask(inputValue.value);
    inputValue.value = '';
}

function renderTask(textValue){
    const header = document.querySelector('.header');
    const tasks = document.querySelector('.Tasks');
    
    


    if (taskArrays.length===1){
        
        const spanTask = document.createElement('span');
        spanTask.classList.add('task');
        spanTask.textContent = textValue;

        const spanGarbage = document.createElement('span')
        spanGarbage.classList.add('garbage')
        spanGarbage.textContent = 'мусор'

        const container =  document.createElement('div');
        container.classList.add('container')

        
        header.after(tasks);
        tasks.append(container);
        container.append(spanTask)
        container.append(spanGarbage)

    }
    else{
        const spanTask = document.createElement('span');
        spanTask.classList.add('task');
        spanTask.textContent = textValue;
        
        tasks.append(spanTask);
    }
   console.log(taskArrays);
}


