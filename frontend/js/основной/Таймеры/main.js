setTimeout, clearTimeout,
 setInterval, clearInterval



 function startTimer(delay, stopDelay){
    const id = setInterval(() =>{
        console.log('Запросы на сервер')
    }, delay)
    setTimeout(()=> {
        clearInterval(id)
    }, stopDelay)
 }
 startTimer(1000, 5000);