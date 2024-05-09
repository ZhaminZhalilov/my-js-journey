// fetch, axios, XMLHttpRequest
// methods: GET, POST, DELETE, PUT
// status: 200, 500, 404
// body, 
// api
// network, 3G

fetch(
    'https://jsonplaceholder.typicode.com/posts'
).then((data) => {
    return data.json()
}).then((info) => {
    console.log(info)
});
