let  taskArrays = [];

const button = document.querySelector('.buttonAdd');
button.addEventListener('click',submitButtonClicked);





function submitButtonClicked(){
    const inputValue = document.querySelector('.textField');
    inputValue.placeholder = 'Введите новую задачу!'
    taskArrays.push({value:inputValue.value,id:taskArrays.length});
   
    renderTask(inputValue.value);
    inputValue.value = '';

    const buttonDel = document.querySelectorAll('.deletButton');
    const array = Array.from(buttonDel)
    array.forEach((elem) => {
        const id = array.indexOf(elem)
        
        console.log(array)
        elem.addEventListener('click',deleteButtonClicked(id))
    })
    

}
function deleteButtonClicked(id){
    taskArrays.forEach((task) => {
       
    })
}
function renderTask(textValue){
    const header = document.querySelector('.header');
    const tasks = document.querySelector('.Tasks');
    
    

    if (textValue){
        if (taskArrays.length===1){
            const container =  document.createElement('div');
            container.classList.add('container')
    
            const spanTask = document.createElement('span');
            spanTask.classList.add('task');
            spanTask.textContent = `${taskArrays.length}.`  + textValue;
    
            const spanGarbage = document.createElement('span')
            spanGarbage.classList.add('deletButton')
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
            spanGarbage.classList.add('deletButton')
            spanGarbage.textContent = 'мусор'
            spanGarbage.innerHTML = '<img class="icon" src="img/icon.png" alt="">'
    
            tasks.append(container);
            container.append(spanTask)
            container.append(spanGarbage)
        }
       
    }
    else{
        const inputValue = document.querySelector('.textField');
        inputValue.placeholder = 'Пустая строка, введите задачу!'
    }
    }
    


