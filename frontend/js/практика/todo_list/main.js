let  taskArrays = [];

const button = document.querySelector('.buttonAdd');
button.addEventListener('click',submitButtonClicked);

const buttonDel = document.querySelectorAll('.garbage');
buttonDel.addEventListener('click',deleteButtonClicked);

function submitButtonClicked(){
    const inputValue = document.querySelector('.textField');
    taskArrays.push({value:inputValue.value,id:taskArrays.length});
   
    renderTask(inputValue.value);
    inputValue.value = '';
}
function deleteButtonClicked(){
    console.log('dd')
}
function renderTask(textValue){
    const header = document.querySelector('.header');
    const tasks = document.querySelector('.Tasks');
    
    


    if (taskArrays.length===1){
        const container =  document.createElement('div');
        container.classList.add('container')

        const spanTask = document.createElement('span');
        spanTask.classList.add('task');
        spanTask.textContent = `${taskArrays.length}.`  + textValue;

        const spanGarbage = document.createElement('span')
        spanGarbage.classList.add('garbage')
        spanGarbage.textContent = 'мусор'
        spanGarbage.innerHTML = '<img class="icon" src="img/icon.png" alt="">'

        
        
        header.after(tasks);
        tasks.append(container);
        container.append(spanTask)
        container.append(spanGarbage)

    }
    else{

        const container =  document.createElement('div');
        container.classList.add('container')

        const spanTask = document.createElement('span');
        spanTask.classList.add('task');
        spanTask.textContent = `${taskArrays.length}.`  + textValue;
        
        const spanGarbage = document.createElement('span')
        spanGarbage.classList.add('garbage')
        spanGarbage.textContent = 'мусор'
        spanGarbage.innerHTML = '<img class="icon" src="img/icon.png" alt="">'

        tasks.append(container);
        container.append(spanTask)
        container.append(spanGarbage)
    }
   console.log(taskArrays);
}


