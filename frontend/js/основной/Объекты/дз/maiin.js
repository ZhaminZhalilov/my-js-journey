const userInformation = {
    name: 'Иван',
    surname: 'Иванов',
    age: 15,
    family: {
        dad: {
            name: 'Александр',
            surname: 'Иванов',
            age: undefined,
        },
        mom: {
            name: 'Наталья',
            surname: 'Иванова',
        },
        brother: {
            name: 'Константин',
            surname: 'Иванов',
            age: '10',
        },
        sister: {
            name: 'Константин',
            surname: 'Иванов',
            age: '10',
        }
        
    },
}

const listOfFamily = {
    dad: 'Отец',
    mom: 'Мать',
    brother: 'Брат',
}
function getInfo(info) {
    let str = `У ${info.name} ${info.surname}`;
    let family ='';
    let sizeFamily =0;

    // str += ` ${familyKeys.length} члена семьи`;

    for (familyMember in info.family) {
        const data = info.family[familyMember];

        const member = listOfFamily[familyMember];
        if (!member){
            console.error(`Добавьте ${familyMember}`);
            continue;
        }
        sizeFamily++;
        family += `\n-${member}: ${data.name} ${data.surname}`

        if (typeof data.age ==='number' || 
            typeof data.age ==='string') {
            family += ` (${data.age} лет)`
        }
        else  family+= ' (возраст не известен)'
    }
    str +=` ${sizeFamily} члена семьи`;
    str += family
    return str;
}
console.log(getInfo(userInformation));