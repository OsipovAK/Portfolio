// a = confirm("Попытки закончились! Сыграем еще?");
// console.log(a);
(function () {
    var answer = 0;
    var s = 0;
    var gameAgain = 1;
    var attemp = 10;
    window.start = function () {
        var number = random(1000);
        while (gameAgain > 0) {
            do {
                answer = prompt('Введите число от 1 до 1000! У вас осталось ' + attemp + ' попыток!');
                s = checkAnswer(number, answer);
                attemp--;
                if (attemp == 0) {
                    var endAttemp = confirm("Попытки закончились! Сыграем еще?") ? 1 : 0;
                    if (endAttemp == 1) {
                        attemp = 10;
                        number = random(1000);
                    } else {
                        s = 4;
                        gameAgain = 0;
                    }
                }
            }
            while (s < 4) {
                gameAgain = confirm("Сыграем еще?") ? 1 : 0;
                number = random(1000);
            }
        }

        function random(number) {
            return Math.ceil(Math.random() * number);
        };
        function checkAnswer(number, answer) {
            if (answer == null) {
                alert('игра заканчивается');
                s = 4;
                return s;
            } else if (answer != number && answer != null) {
                if (answer < number) {
                    alert('Больше!');
                    s = 1;
                    return s;
                } else if (answer > number) {
                    alert('Меньше!');
                    s = 2;
                    return s;
                } else if (answer != parseInt(answer)) {
                    alert('Вы ввели не число. Введите число!');
                    s = 3;
                    return s;
                }
            } else {
                alert('Правильно!');
                s = 4;
                return s;
            }
        };
    };
})()