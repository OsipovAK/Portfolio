let firstValue = prompt("Введите первое число")
let secondValue = prompt("Введите второе число")
firstValue = parseInt(firstValue);
secondValue = parseInt(secondValue);

if (firstValue === '' || isNaN(firstValue) || secondValue === '' || isNaN(secondValue)) {
    alert('Возможно сравнить только числа!');
} else {
    if (firstValue > secondValue) {
        alert('Первое число больше!');
    }
    else if (firstValue < secondValue) {
        alert('Второе число больше!');
    }
    else {
        alert('Числа равны!');
    }
}