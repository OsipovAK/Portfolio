// alert(
//     [1, 2, 3].join('\n')
// )

(function () {
    var userText = '';
    var user = [];
    var userObj = {};
    var arrUser = [];
    window.start = function start() {
        do {
            userText = prompt('Введите имя и фамилию через пробел!');
            if (userText != null) {
                User(userText);
            }
        }
        while (userText != null) {
            getAllUsers(user);
        }
        function User(userText) {
            arrUser = userText.split(' ');
            userObj = {
                name: arrUser[0],
                lastName: arrUser[1],
                regDate: printFullTime()
            };
            console.log(userObj);
            user.push(userObj);
        }
        function getAllUsers(user) {
            var long = user.length;
            var str = '';
            var array = [];
            var i = 0;
            do {
                for (var prop in user) {
                    var propValue = user[prop];
                    array.push(propValue);
                    str = array.join(' ');
                    console.log(str);
                };
                i++;
            }
            while (i < long) {
                console.log(long);
                // alert('Текст\nТекст2.\n');
            }
        }
        function printFullTime() {
            var d = new Date();
            var month = getRusMonth(d);
            var date = d.getDate();
            var fullYear = d.getFullYear();
            var h = d.getHours();
            var min = d.getMinutes();
            var s = d.getSeconds();
            function getRusMonth(d) {
                let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
                return months[d.getMonth()];
            };
            var textFormat = date + ' ' + month + ' ' + fullYear + ' г. ' + h + ':' + min + ':' + s;
            return textFormat;
        };
    }
})()

/* Написать простой прототип системы регистрации пользователей. Для этого
используйте две функции-конструктора:

1. User, которая создает объект типа «пользователь» со следующими свойствами:
{ // имя firstName: ‘', // фамилия lastName: '’, // дата и время регистрации regDate: ''}.
Объекты типа User предназначены для сохранения каждой отдельной записи о пользователе.

2. UserList, которая создает объект типа “список пользователей” со следующими свойствами
и методами: { // внутреннее свойство-массив, в которое будут попадать объекты типа
User users: [], // метод получает в качестве параметра объект типа User и сохраняет
его в массив users add: function(user) {}, // метод возвращает список пользователей из массива
users getAllUsers: function() {}}. Объекты типа UserList предназначены для хранения множества
записей типа User.

При запуске программы должно происходить:

1. Создавать новый экземпляр объекта UserList (с пустым свойством-массивом users).

2. Открываться диалог prompt с предложением ввести имя и фамилию пользователя для
регистрации (одной строкой через пробел).

3. После нажатия ОК должен создаваться новый экземпляр объекта User с заполнением
свойств firstName, lastName и regDate (текущая дата и время).

4. Созданный экземпляр объекта должен сохраняться в свойство-массив users созданного
ранее объекта типа UserList (при помощи метода add).

5. Диалог prompt должен повторяться, пока пользователь не нажмет “Отмена”.

6. После нажатия «Отмена» выведите на экран (в консоль или при помощи alert) список
всех пользователей с именами и датами регистрации (используйте для этого метод getAllUsers).
*/
