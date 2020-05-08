var myName = prompt('Как вас зовут?');
var myLastName = prompt('Назовите вашу фамилию')
var myBirthYear = prompt('Введите ваш год рождения');

var currentYear = 2020;
var age = currentYear - myBirthYear;


if (age < 20) {
    alert('Привет, ' + myLastName + ' ' + myName + '!');
}
else if (age >= 20 && age < 40) {
    alert('Добрый день, ' + myLastName + ' ' + myName + '!');
}
else {
    alert('Здравствуйте, ' + myLastName + ' ' + myName + '!');
}