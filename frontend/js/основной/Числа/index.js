// Number
// 0xff для 16 счисления
// 0b для двоичных и 0o для восьмеричных
// num.toString(n) возвращает num с n счислением
// 121..toString(n); 
// Math.pow / 2**
// Math.ceil(num) - к большему
// Math.floor(num) - к меньшему
// Math.round(num) - до ближайшего целого
// Math.trunc(num)- убирает дроби
// Math.random(num)- от 0 (включительно) до 1 (но не включая 1)
// Math.max(num), Math.max(min) возвращает максимальное и минимальное число
// parseInt(num) находит челое число  встроке, 
// parseFloat(num) находит дробное число в строке, 
// num.toFixed(n) округляте до n после запятой 

// унарный +, Number, toString
// isFinite(num) isNan(num)

// Number.isNaN() и Number.isFinite()
// проверяет принадлженость к типу number 

//Object.is(NaN, NaN) === true (0, -0) === false
// isNaN, isInteger

// alert( 0xff ); // 255

// let a = 0b11111111; // двоичная форма записи числа 255
// let b = 0o377; // восьмеричная форма записи числа 255

// alert( a == b ); // true, с двух сторон число 255

// let num = 255;
// alert( num.toString(16) );  // ff от 2 до 36
// alert( 123456..toString(36) ); // 2n9c

// let num_2 = 1.54;
// alert(Math.ceil(num_2)) // 2
// alert(Math.floor(num_2)) // 1
// alert(Math.round(num_2)) // 2 до ближайшего числа
// alert(Math.trunc(num_2)) // 1
// alert(Math.random()) // 0.890069172777989
// alert(Math.pow(7,2)) //49
// alert( Math.max(3, 5, -10, 0, 1) ); // 5
// alert( Math.min(1, 2) ); // 1

// let num = 12.34;
// alert( num.toFixed(1) ); // "12.3"

// alert( isNaN(NaN) ); // true
// alert( isNaN("str") ); // true
// alert( NaN === NaN ); // false

// alert( isFinite("15") ); // true
// alert( isFinite("str") ); // false, потому что специальное значение: NaN
// alert( isFinite(Infinity) ); // false, потому что специальное значение: Infinity
// alert(isFinite('')) //0 => true

// alert( Number.isFinite(123) ); // true
// alert( Number.isFinite(Infinity) ); // false
// alert( Number.isFinite(2 / 0) ); // false

// alert(Object.is(NaN, NaN)) // true
// alert(Object.is(0, -0)) // false
// alert(Object.is(5, 5)) // true

// alert( parseInt('1.45px') ); // 100
// alert( parseFloat('12.5em') ); // 12.5

// alert( parseInt('12.8') ); // 12, вернётся только целая часть
// alert( parseFloat('12.3.4') ); // 12.3, произойдёт остановка чтения на второй точке
// alert( parseInt('0xff', 16) ); // 255 //  имеет необязательный второй параметр

function randomInteger(max,min) {
    let numbers = min + Math.random()*(ma+1-min);
    return Math.floor(numbers)
}
alert(randomInteger(10,15));