//await + catch
//try / catch



function getData() {
        fetch('https://jsonplaceholder.typicode.com/todos')
    .then((data) => {
        return data.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {});
    }