var number = random(1000);
var s = 0;
var gameAgain = 1;

while (gameAgain > 0) {
    do {
        var answer = prompt('Введите число от 1 до 1000');
        var s = checkAnswer(number, answer);
    }
    while (s < 4) {
        var gameAgain = confirm("Сыграем еще?") ? 1 : 0;
        var number = random(1000);
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