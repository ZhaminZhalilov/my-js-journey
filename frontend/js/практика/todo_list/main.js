let  taskArrays = [];
let delButton = []

const button = document.querySelector('.buttonAdd');
button.addEventListener('click',submitButtonClicked);





function submitButtonClicked(){
    const inputValue = document.querySelector('.textField');
    inputValue.placeholder = 'Введите новую задачу!'
    if (inputValue.value !==''){
        taskArrays.push({value:inputValue.value,id:taskArrays.length})
    }
    
    
    renderTask(inputValue);
    inputValue.value = '';

    const buttonDel = document.querySelectorAll('.deletButton');
    const array = Array.from(buttonDel)
    for (let i = 0; array.length > i;i++){
        const button = array[i];
        button.id = i;
        button.addEventListener('click',deleteButtonClicked)
      
        
    }
    

}
function deleteButtonClicked(){
    const delId = parseFloat(event.target.id);
    const buttonDell = document.getElementById(`${delId}`)
    const container = buttonDell.parentNode
    container.remove()
    
    
    
    
}
function renderTask(textValue){
    const header = document.querySelector('.header');
    const tasks = document.querySelector('.Tasks');
    
    

    if (textValue.value){
        if (taskArrays.length===1){
            const container =  document.createElement('div');
            container.classList.add('container')
    
            const spanTask = document.createElement('span');
            spanTask.classList.add('task');
            spanTask.textContent =  textValue.value;
    
            const spanGarbage = document.createElement('span')
            spanGarbage.classList.add('deletButton')
            spanGarbage.textContent = 'мусор'
            spanGarbage.innerHTML = '<img class="icon" src="img/icon.png" alt="">'
    
            
            
            header.after(tasks);
            tasks.append(container);
            container.append(spanTask)
            container.append(spanGarbage)
            delButton.push(textValue)
            
    
        }
        else{
            const container =  document.createElement('div');
            container.classList.add('container')
    
            const spanTask = document.createElement('span');
            spanTask.classList.add('task');
            spanTask.textContent = textValue.value;
            
            const spanGarbage = document.createElement('span')
            spanGarbage.classList.add('deletButton')
            spanGarbage.textContent = 'мусор'
            spanGarbage.innerHTML = '<img class="icon" src="img/icon.png" alt="">'
    
            tasks.append(container);
            container.append(spanTask)
            container.append(spanGarbage)
            delButton.push(textValue)
            console.log(delButton)
        }

       
    }
    else{
        const inputValue = document.querySelector('.textField');
        inputValue.placeholder = 'Пустая строка, введите задачу!'
    }
    }
    


