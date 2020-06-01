(function () {
    var name = '';
    var user = [];
    var arrUser = [];
    var str = '';
    var allStr = '';
    window.start = function start() {
        do {
            name = prompt('Введите имя и фамилию через пробел!');
            if (name != null) {
                name = name.split(' ');
                user = new User(name[0], name[1]);
                arrUser.push(user);
            }
        }
        while (name != null) {
            getAllUsers(user);
        }
        function User(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.regDate = new Date().toLocaleString();
        }
        function getAllUsers(user) {
            var long = arrUser.length;
            for (let index = 0; index < arrUser.length; index++) {
                str = arrUser[index].firstName + ' ' + arrUser[index].lastName + ' ' + arrUser[index].regDate + '\n';
                allStr = str + allStr;
            }
            alert(allStr);
        }
    }
})()