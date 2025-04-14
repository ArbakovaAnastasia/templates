// Простой игровой бот, который умеет:
// предлагает пользователю ввести свой вариант отгадки;
// если пользовательское число больше, чем загаданное, то бот выводит “Меньше!” и предлагает ввести новый вариант;
// если пользовательское число меньше, чем загаданное, то бот выводит “Больше!” и предлагает ввести новый вариант; 
// если пользователь вводит правильное число, то бот выводит “Правильно!”;
// если пользователь ввел не число, то выводит “Введи число!”;
// если пользователь нажимает “Отмена”, то игра заканчивается.
 
// буквы кирилица и латиница, пробелы, 123фыв, 123asd, фыв123, asd123, символы, дробные

let randomNumber;
let userNumber;
let mark_guess = false;
let playAgain = true;

while (playAgain) {
    randomNumber = setRandomNumber();
    mark_guess = false;

    while (mark_guess == false) {
        inputNumber();
        mark_guess = compareNumbers(randomNumber, userNumber);
    }
    playAgain = confirm('Сыграем еще раз?');
}


//---
function setRandomNumber() {
    let randomNum = Math.round(Math.random() * 10);
    isNotNull(randomNum);
    console.log(randomNum);
    alert('Я загадал число от 1 до 10! Угадай!');
    return randomNum;
}

function isNotNull(number) {
    if (typeof number === 'undefined') {
        return;
    }
    if (number == 0) setRandomNumber();
}

function inputNumber() {
    userNumber = prompt('Введи число', '');
    while (isNumeric(userNumber) == false) {
        userNumber = prompt('Некорректный ввод, напишите заново. Введи число', '');
    }
}

function isNumeric(number) {
    if (typeof number === 'undefined') {
        return;
    }

    let functionResult = false;
    if (number.replace(/\s/g, "").length === 0 || isNaN(number) || !Number.isInteger(Number(number))) {
        functionResult = false;
        alert("Некорректный ввод, напишите заново");
    } else {
        functionResult = true;
        alert(`Число ${number} принято`);
    }
    return functionResult;  
}

function compareNumbers(randomNumber, userNumber) {
    if (randomNumber == userNumber) {
        alert('Ты выиграл!');
        return true;
    } else if (randomNumber < userNumber) {
        alert('Меньше!');
    } else if (randomNumber > userNumber) {
        alert('Больше!');
    }
    return false;
}