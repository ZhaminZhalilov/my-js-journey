// setAttribute, hasAttribute, getAttribute , removeAttribute
// data-* атрибуты
// style (background-color -> backgroundColor)
// cssText
// className
// classList (add, remove, toggle, contains)
 const a =document.querySelector('a');
// a.setAttribute('href','http');
// a.setAttribute('me_custom_attr','privet')

// console.log(input.dataset); находит все атрибуты data

// a.style.color='red';
// a.style[background-color]=''
// a.style.backgroundColor='green'

// a.style.cssText = `
//     color: red;
//     background-color: black;
// `;
a.className +=' link2'