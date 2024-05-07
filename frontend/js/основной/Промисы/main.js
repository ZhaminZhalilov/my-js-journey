// Promise
// resolve, reject
// then, catch, finally

// Возвращают новый промис:

// Promise.all - ждем все промисы, если хоть один с ошибок - catch, иначе then
// Promise.allSettled - просто ждем выполнения всех промисов (всегда then)
// Promise.race - получаем первый выполнившийся промис (если он был с ошибкой - catch, иначе then)
// Promise.any - получаем первый УСПЕШНО выполнившийся промис













// run((auth) => {
//     getUserInfo((user) => {
//         getUserGames((userGames) => {
//             getSomething('...');
//         })
//     })
// })

// run()
//     .then(getUserInfo)
//     .then(getUserGames)
//     .then(getSomething);


// function fetchUserInfo(callback) {
//     setTimeout(() => {
//         /// fetch
//         const data = { id: 1, name: 'Alex' };
//         callback(data);
//     }, 1000);
// }


// function fetchUserGames(id, callback) {
//     setTimeout(() => {
//         /// fetch(id)
//         const data = ['game1', 'game2'];
//         callback(data);
//     }, 1000);
// }


// function run() {
//     fetchUserInfo((userInfo) => {
//         console.log(userInfo);

//         fetchUserGames(userInfo.id, (userGames) => {
//             console.log(userGames)
//         });
//     });
// }


// run();


// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             /// fetch
//             const data = { id: 1, name: 'Alex' };
//             resolve(data);
//         }, 1000);  
//     });
// }

// function fetchUserGames(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             /// fetch id
//             const data = ['game1', 'game2'];
//             reject('Ошибка 2');
//         }, 1000);  
//     });
// }


// function run() {

//     fetchUserData()
//         .then((userData) => {
//             console.log(userData);
//             return fetchUserGames(userData.id);
//         })
//         .then((userGames) => {
//             console.log(userGames);
//         })
//         .catch((message) => {
//             console.log(message);
//         })
//         .finally(() => {
//             console.log('Промис завершился')
//         });

// }


// run();






// function fetchGames() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // fetch
//             const dataFromServer = 'fehqufehqufieq';
//             // const gamesFromServer = [
//             //     { id: 1, name: 'Человек паук' },
//             //     { id: 2, name: 'Марио' }
//             // ];

//             if (Array.isArray(dataFromServer)) {
//                 resolve(gamesFromServer);
//             }
//             else {
//                 reject('Что-то не данными');
//             }
//         }, 2000);
//     });
// }

// function renderLoading() {
//     const body = document.querySelector('body');

//     const loading = document.createElement('div');
//     loading.id = 'loading';
//     loading.textContent = 'Загрузка...';

//     body.append(loading)
// }


// function renderGames(games) {
//     const body = document.querySelector('body');
    
//     const loading = document.querySelector('#loading');
//     loading.remove();


//     games.forEach((game) => {
//         const gameElement = document.createElement('div');
//         gameElement.innerText = `Игра: ${game.name}`;
//         gameElement.className = 'game-element';
    
//         body.append(gameElement)
//     });
// }


// renderLoading();

// fetchGames()
//     .then((games) => {
//             renderGames(games);
//         },
//         // (message) => {

//         //     // renderErrorMessage();
//         //     console.log(message)
//         // }
//     )
//     .catch((message) => {
//         console.log(message)
//     });







// function fetchVideo() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             /// fetch id
//             const data = ['видео1', 'видео2'];
//             console.log('данные 1 получены');
//             reject('Ошибка 1');
//         }, 1000);  
//     });
// }


// function fetchShorts() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             /// fetch id
//             const data = ['шортс1', 'шортс2'];
//             console.log('данные 2 получены');
//             reject('Ошибка 2');
//         }, 2000);  
//     });
// }



// function main() {
//     console.log('Загрузка');

// // Promise.all
// // Promise.allSettled

// // Promise.race
// // Promise.any

//     Promise.any([fetchVideo(), fetchShorts()])
//         .then((data) => {

//             console.log('OK', data);

//         })
//         .catch((message) => {
//             console.log('ERROR', message);
//         });

// }

// main();





