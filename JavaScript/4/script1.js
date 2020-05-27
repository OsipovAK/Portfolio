function printFullTime() {
    var d = new Date();
    var day = getWeekDay(d);
    var month = getRusMonth(d);
    var date = d.getDate();
    var fullYear = d.getFullYear();
    var minutes = getRusMinutes(d);
    var rusHours = getRusHours(d);
    var h = d.getHours();
    var min = d.getMinutes();
    var s = d.getSeconds();
    var rusSec = getRusSeconds(d);

    function getWeekDay(d) {
        let days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
        return days[d.getDay()];
    };
    function getRusMonth(d) {
        let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        return months[d.getMonth()];
    };
    function getRusMinutes(d) {
        min = d.getMinutes();
        min = Math.abs(min) % 100; var min1 = min % 10;
        if (min > 10 && min < 20) { return 'минут'; }
        if (min1 > 1 && min1 < 5) { return 'минуты'; }
        if (min1 == 1) { return 'минута'; }
        return 'минут';
    };
    function getRusHours(d) {
        h = d.getHours();
        h = Math.abs(h) % 100; var h1 = h % 10;
        if (h > 10 && h < 20) { return 'часов'; }
        if (h1 > 1 && h1 < 5) { return 'часа'; }
        if (h1 == 1) { return 'час'; }
        return 'часов';
    };
    function getRusSeconds(d) {
        s = d.getSeconds();
        s = Math.abs(s) % 100; var s1 = s % 10;
        if (s > 10 && s < 20) { return 'секунд'; }
        if (s1 > 1 && s1 < 5) { return 'секунды'; }
        if (s1 == 1) { return 'секунда'; }
        return 'секунд';
    };
    console.log('Сегодня ' + date + ' ' + month + ' ' + fullYear + ' года, ' + day + ', '
        + h + ' ' + rusHours + ' ' + min + ' ' + minutes + ' ' + s + ' ' + rusSec);
};

let timerId = setInterval(printFullTime, 1000);
setTimeout(() => { clearInterval(timerId); alert('Отсчитали 10 секунд'); }, 10000);