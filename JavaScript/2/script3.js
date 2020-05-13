const setValues = [];
let total = 0;
do {
    userInput = prompt('Введите число', '');
    if (userInput === '' || isNaN(userInput)) {
        alert('Вы ввели не число');
    }
    setValues.push(Number(userInput));
} while (userInput !== null);
for (const value of setValues) {
    if (isNaN(value)) {
        total = total + 0;
    } else {
        total = total + value;
    }

}
alert(`Общая сумма чисел равна ${total}`);
alert(`Введенные значения ${setValues}`);