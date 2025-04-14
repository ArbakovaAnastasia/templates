// Программа, которая выводит текущую дату в полном русскоязычном формате,
// например: “Сегодня 8 декабря 2018 года, суббота, 20 часов 6 минут 54 секунды”.
// Правильное склонения слов “час”, “минута”, “секунда”.

// +с помощью стандартной функции setInterval сделать так, 
// чтобы сформированная строка с датой и временем отображалась в консоли каждую секунду.

const MONTHS = [
    "января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря" 
];
const WEEK = [
    "воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница","суббота"
];

setInterval(() => {
    let todayDate = new Date();

    let date = todayDate.getDate();
    let month = MONTHS[todayDate.getMonth()];
    let year = todayDate.getFullYear();

    let dayOfWeek = WEEK[todayDate.getDay()];

    let hours = todayDate.getHours();
    let minutes = todayDate.getMinutes();
    let seconds = todayDate.getSeconds();

    console.log(`Сегодня ${date} ${month} ${year} года, ${dayOfWeek}, ${getHoursWithDeclension(hours)} ${getMinutesWithDeclension(minutes)} ${getSecondesWithDeclension(seconds)}`);
}, 1000);

//---
function getHoursWithDeclension(hours) {
    let hourWord = "часа";
    const lastDigit = hours % 10;
    const lastTwoDigits = hours % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        hourWord = "часов";
    } else if (lastDigit === 1) {
        hourWord = "час";
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        hourWord = "часа";
    } else {
        hourWord = "часов";
    }
    return `${hours} ${hourWord}`;
}

function getMinutesWithDeclension(minutes) {
    let minutesWord = "минуты";
    const lastDigit = minutes % 10;
    const lastTwoDigits = minutes % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        minutesWord = "минут";
    } else if (lastDigit === 1) {
        minutesWord = "минута";
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        minutesWord = "минуты";
    } else {
        minutesWord = "минут";
    }
    return `${minutes} ${minutesWord}`;
}

function getSecondesWithDeclension(seconds) {
    let secondsWord = "секунды";
    const lastDigit = seconds % 10;
    const lastTwoDigits = seconds % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        secondsWord = "секунд";
    } else if (lastDigit === 1) {
        secondsWord = "секунда";
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        secondsWord = "секунды";
    } else {
        secondsWord = "секунд";
    }
    return `${seconds} ${secondsWord}`;
}    