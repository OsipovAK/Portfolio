function random(number) {
    return Math.ceil(Math.random() * number);
}
let number = random(1000);
let answer = prompt('Угадай число от 1 до 1000');
// var gameAgain = confirm("Сыграем еще?");
if (answer == null) {
    alert('игра заканчивается');
    answer == + answer;
} else {
    while (answer != number && answer != null) {
        if (answer < number) {
            answer = prompt('Больше!');
        } else if (answer > number) {
            answer = prompt('Меньше!');
        } else if (answer != parseInt(answer)) {
            answer = prompt('Введи число!')
        }
    } if (answer == number) {
        alert('Правильно!');
    } else if (answer == null) {
        alert('игра заканчивается');
    }
}