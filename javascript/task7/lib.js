(function(window) {
    let randomNumber;
    let attempts;
    let maxAttempts = 10;
    
    function setRandomNumber() {
        randomNumber = Math.round(Math.random() * 10);
        console.log(randomNumber);
        alert('Я загадал число от 1 до 10! Угадай!');
    }

    function isNumeric(number) {
        if (typeof number === 'undefined') {
            return false;
        }

        if (number.replace(/\s/g, "").length === 0 || isNaN(number) || !Number.isInteger(Number(number))) {
            alert("Некорректный ввод, напишите заново");
            return false;
        }
        
        const num = Number(number);
        if (num < 1 || num > 10) {
            alert("Число должно быть от 1 до 10. Попробуйте снова!");
            return false;
        }

        alert(`Число ${number} принято`);
        return true;  
    }

    function compareNumbers(userNumber) {
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

    function start() {
        setRandomNumber();
        attempts = 0;

        while (attempts < maxAttempts) {
            let remainingAttempts = maxAttempts - attempts; // Вычисляем оставшиеся попытки
            let userNumber = prompt(`Введи число от 1 до 10. Осталось попыток: ${remainingAttempts}`, '');

            while (!isNumeric(userNumber)) {
                userNumber = prompt(`Некорректный ввод, напишите заново. Введи число от 1 до 10. Осталось попыток: ${remainingAttempts}`, '');
            }

            attempts++;

            if (compareNumbers(Number(userNumber))) {
                if (confirm('Хотите сыграть еще раз?')) {
                    start(); // Начать игру заново
                }
                break; // Выход из цикла, если угадал
            }

            if (attempts === maxAttempts) {
                alert('Попытки закончились! Начнем игру заново.');
                if (confirm('Сыграем еще раз?')) {
                    start(); // Начать игру заново
                }
            }
        }
    }


    // Экспортируем только функцию start
    window.start = start;
})(window)
