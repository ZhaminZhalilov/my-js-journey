// new Date(year, month, day, hours, m, s);
// new Date('YYYY-MM-DDTHH:mm:ss.sssZ');
// new Date(timestamp);
// month - 0, 11

// timestamp:
// Date.now()
// getTime()


// get/set
// getFullYear / getYear (developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getYear)
// getMonth
// getDate
// getDay (0 (ВС) -> 6 (СБ)) - получить день недели
// getHours, getMinutes, getSecondss


// getTimezoneOffset
// get + UTC (GTM 0)

// toISOString()
// toLocaleString()
// toLocaleDateString()
// toLocaleTimeString()





// console.log(new Date(2017, 0, 10));
// // 'YYYY-MM-DDTHH:mm:ss.sssZ'
// console.log(new Date('2017-01-01T15:30:10'));
// console.log(new Date(1683620367000));

// console.log(Date.now());
// console.log(new Date());
// console.log(new Date('2023-05-09T15:11:00Z'))

// gmt  utc

// const date = new Date();

// console.dir(date);

// console.log(date.getTime()) -> timestamp

// console.log(date.getTimezoneOffset() / 60)

// console.log(date.getSeconds());
// console.log(date.getMinutes());
// console.log(date.getHours());
// console.log(date.getUTCHours());

// date.setHours(20);

// console.log(date.getHours());

// console.log(date.getFullYear());
// console.log(date.getYear()); // забываем

// console.log(date.getMonth());

// console.log(date.getDay());
// console.log(date.getDate());


// console.log(date.toISOString());
// console.log(date.toDateString());

// console.log(date.toLocaleDateString())
// console.log(date.toLocaleTimeString())
// console.log(date.toLocaleString('en'))

// console.log(date.toLocaleString('en-US'))
// console.log(date.toLocaleString('en-GB'))

const weekList = {
    0:'вс',
    1:'пн',
    2:'вт',
    3:'ср',
    4:'чт',
    5:'пт',
    6:'сб',
}
function getWeekDay(date) {
    const converted = new Date(date);
    const week = converted.getDay();
    console.log(weekList[week])

}
console.log(getWeekDay(new Date(2016,1,10)));

function getFriendlyDate(date){
     if(isToday){
        return 'сeгодня'
     }
     else if(isTomorrow){
        return 'Завтра'
     }
    else if(isYesterday){
        return 'вчера'
     }

}
function isToday(date){
    const current = new Date();
    return date.toDateString() === current.toDateString();
}

function isTomorrow(date){
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return date.toDateString() === tomorrow .toDateString();
}

function isYesterday(date){
    const yesterday = new Date();
    yesterday.setDate(tomorrow.getDate() - 1);
    return date.toDateString() === yesterday .toDateString();
}