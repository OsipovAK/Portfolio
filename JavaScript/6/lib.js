(function () {
    window.start = function start() {
        var userList = new UserList();
        while (true) {
            var name = prompt('Введите имя и фамилию через пробел!');
            if (name === null) {
                alert(userList.getAllUsers());
                break;
            } else if (name == ' ') {
                alert('Вы пропустили пробел или ввели только одно имя или фамилию')
                continue;
            } else {
                name = name.split(' ');
                if (name[1] == undefined) {
                    alert('Вы пропустили проблел или указали только один параметр')
                } else {
                    var user = new User(name[0], name[1]);
                    userList.add(user);
                }
            }
        }
        function UserList(User) {
            this.users = [];
            this.add = function (user) {
                this.users.push(user);
            };
            this.getAllUsers = function () {
                var allStr = '';
                for (let i = 0; i < this.users.length; i++) {
                    var str = this.users[i].firstName + ' ' + this.users[i].lastName + ' ' + this.users[i].regDate + '\n';
                    var allStr = allStr + str;
                }
                return allStr;
            };
        }
        function User(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.regDate = new Date().toLocaleString();
        }
    }
})()