'use strict';

var user = [];
var arrUser = [];
var str = '';
var allStr = '';
var user = {};
// var UserList = [];
var users = [];
var arrName = [];

var User = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.regDate = new Date().toLocaleString();
};

function UserList() {
    this.users = [];
    this.add = function (user) {
        return this.users.push(user);
    };
    this.getAllUsers = function () {

    };
};
do {
    name = prompt('Введите имя и фамилию через пробел!');
    if (name != null) {
        arrName = name.split(' ');
        if (arrName[1] != null) {
            var user = new User(arrName[0], arrName[1]);
            var users = new UserList(user);
        } else {
            alert('Вы пропустили пробел или ввели только одно имя или фамилию');
        }

    }
}
while (name != null) {
    alert('Тут будет вывод всех пользователей');
}
function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.regDate = new Date().toLocaleString();
};

function UserList() {
    this.users = [];
    this.add = function (user) {
        return this.users.push(user);
        console.log(this.users.push(user));
    };
    this.getAllUsers = function () {
        for (let index = 0; index < this.users.length; index++) {
            var str = users[index].firstName + ' ' + users[index].lastName + ' ' + users[index].regDate + '\n';
            var allStr = str + allStr;
            return allStr;
        }
    };
};








// (function () {
//     var name = '';
//     var user = [];
//     var arrUser = [];
//     var str = '';
//     var allStr = '';
//     var User = {};
//     var UserList = [];
//     var users = [];
//     window.start = function start() {
//         do {
//             name = prompt('Введите имя и фамилию через пробел!');
//             if (name != null) {
//                 name = name.split(' ');
//                 if (name[1] != null) {
//                     var User = new User(name[0], name[1]);
//                     console.log(User);
//                     var UserList = new UserList(User);
//                     console.log(users);
//                 } else {
//                     alert('Вы пропустили пробел или ввели только одно имя или фамилию')
//                 }

//             }
//         }
//         while (name != null) {
//             getAllUsers(user);
//         }
//         function UserList(User) {
//             this.User = User;
//             alert(this.User[0])
//             this.add = function (User) {
//                 users.push(this.User);
//                 console.log(users);
//             };
//             this.getAllUsers = function (users) {
//                 var long = arrUser.length;
//                 for (let index = 0; index < arrUser.length; index++) {
//                     str = arrUser[index].firstName + ' ' + arrUser[index].lastName + ' ' + arrUser[index].regDate + '\n';
//                     allStr = str + allStr;
//                 }
//                 alert(allStr);
//             };
//         }
//         function User(firstName, lastName) {
//             this.firstName = firstName;
//             this.lastName = lastName;
//             this.regDate = new Date().toLocaleString();
//         }
//         // function getAllUsers(users) {
//         //     var long = arrUser.length;
//         //     for (let index = 0; index < arrUser.length; index++) {
//         //         str = arrUser[index].firstName + ' ' + arrUser[index].lastName + ' ' + arrUser[index].regDate + '\n';
//         //         allStr = str + allStr;
//         //     }
//         //     alert(allStr);
//         // }
//     }
// })()