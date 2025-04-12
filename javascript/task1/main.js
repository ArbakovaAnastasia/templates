// Программа, которая последовательно запрашивает у пользователя два числа, 
// после чего сравнивает их и выводит одно из сообщений: “Первое число больше второго”, 
// “Второе число больше первого” или “Числа равны”.
// Есть проверка на корректный ввод.

let firstNumber;
let secondNumber;

firstNumber = inputNumber("Введите первое число");
secondNumber = inputNumber("Введите второе число");

compareNumber(firstNumber, secondNumber);

// ---
function inputNumber (message) {
	let number;
	do {
		number = prompt(message, "");
	} while (isNumeric(number) == false);
	return number;
};

function isNumeric(number) {
	let isNumericResult = false;
	//первое условие replace заменяет все пробелы на пустоту, /внутренности/ - регулярка,
	// \s возвращает пробелы, g-global - все пробелы, без него вернет только первый
	//количество пробелов равно 0 или является NotANumber нечисло
	if (number.replace(/\s/g, "").length === 0 || isNaN(number)) {
		isNumericResult = false;
		alert("Напишите число");
	} else {
		isNumericResult = true;
		alert(`Число ${number} принято`);
	}
	return isNumericResult;
}

function compareNumber(a, b) {
	if (a > b) {
		alert(`Число ${a} больше числа ${b}`);
    } else if (a < b) {
        alert(`Число ${b} больше числа ${a}`);
    } else {
        alert(`Числа ${a} и ${b} равны`);
	}
}