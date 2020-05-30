// a = confirm("Попытки закончились! Сыграем еще?");
// console.log(a);
(function () {
    var answer = 0;
    var returnFunc = 0;
    var gameAgain = 1;
    var attemp = 10;
    window.start = function () {
        var number = random(1000);
        while (gameAgain > 0) {
            do {
                answer = prompt('Введите число от 1 до 1000! У вас осталось ' + attemp + ' попыток!');
                returnFunc = checkAnswer(number, answer);
                attemp--;
                if (attemp == 0) {
                    var endAttemp = confirm("Попытки закончились! Сыграем еще?") ? 1 : 0;
                    if (endAttemp == 1) {
                        attemp = 10;
                        number = random(1000);
                    } else {
                        returnFunc = 4;
                        gameAgain = 0;
                    }
                }
            }
            while (returnFunc < 4) {
                gameAgain = confirm("Сыграем еще?") ? 1 : 0;
                attemp = 10;
                number = random(1000);
            }
        }

        function random(number) {
            return Math.ceil(Math.random() * number);
        };
        function checkAnswer(number, answer) {
            if (answer == null) {
                alert('игра заканчивается');
                returnFunc = 4;
                return returnFunc;
            } else if (answer != number && answer != null) {
                answer = parseInt(answer);
                if (answer < number) {
                    alert('Больше!');
                    returnFunc = 1;
                    return returnFunc;
                } else if (answer > number) {
                    alert('Меньше!');
                    returnFunc = 2;
                    return returnFunc;
                } else if (answer != parseInt(answer)) {
                    alert('Вы ввели не число. Введите число!');
                    returnFunc = 3;
                    return returnFunc;
                }
            } else {
                alert('Правильно!');
                returnFunc = 4;
                return returnFunc;
            }
        };
    };
})()