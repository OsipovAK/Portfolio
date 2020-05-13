let startYear = prompt("Введите начальный год")
let endYear = prompt("Введите год окончания проверки")
if (startYear < endYear) {
    do {
        var formula = (startYear & 3) == 0 && ((startYear % 25) != 0 || (startYear & 15) == 0);
        if (formula == true) {
            console.log(startYear + ' год високосный');
        } else {

        };
        startYear++;
    } while (startYear <= endYear);
} else {
    alert("Введены некорректные значения")
}