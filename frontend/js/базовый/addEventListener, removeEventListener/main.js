// // click, input, scroll, keydown, resize, mouseenter, mouseleave
// // addEventListener, removeEventListener


// const button=document.querySelector('button')
// button.addEventListener('click',clickHandler)
// let i =0;
// function clickHandler(){
//     i++;
//     console.log('click');

//     switch(i){
//         case 1:
//             button.style.background='red'
//             break;
//         case 2:
//             button.style.background='green'
//             break;
//         case 3:
//             button.style.background='yellow'
//             break;
//         case 4:
//             button.style.background='black'
//             break;
//         case 5:
//             button.style.background='blue'
//             button.removeEventListener('click', clickHandler);
//             break                    
                
//     }
// }
const input = document.querySelector('[name="my_input"]');

input.addEventListener('input',function_name);

let prevValue = input.value;

function function_name(event){
    const userData=event.target.value;

    if(userData.includes('(') || userData.includes(')')){
        input.value=prevValue;
        return;
    }

    input.value=userData
    prevValue=userData
}