var i = 0;
var error = [];
var users = [
    { name: 'Андрей', login: 'user1', pass: 'pass1' },
    { name: 'Анаталий', login: 'user2', pass: 'pass2' },
    { name: 'Антон', login: 'user3', pass: 'pass3' }
];
var length = users.length;
var login = prompt('Введите ваш логин');
var pass = prompt('Введите ваш пароль');
do {
    var user = users[i];
    checkUser(user, login, pass);
    error.push(errorPrim);
    i++;
}
while (i < length) {
    if (error.indexOf(1) < 0) {
        alert('Ошибка авторизации!');
    } else {
        console.log('Пользователь авторизовался')
    }
};

function checkUser(user, login, pass) {
    var array = [];
    for (var prop in user) {
        var propValue = user[prop];
        array.push(propValue);
    };
    if (login == array[1] && pass == array[2]) {
        alert('Добро пожаловать ' + array[0] + '!');
        return errorPrim = 1;
    } else {
        return errorPrim = 0;
    }
};


// 2. Написать простую программу авторизации. Создать массив users, в 
// котором каждый элемент – это объект типа “пользователь” со свойствами 
// “имя”, “логин” и “пароль”. Программа должна запрашивать у пользователя 
// логин и пароль при помощи prompt, после чего проходить по массиву users 
// и искать в нем объект с такими же значениями. Если пользователь найден в 
// массиве users, то программа должна поздороваться с ним по имени. В 
// противном случае должна появиться ошибка авторизации.