// Программа, которая последовательно запрашивает у пользователя два числа, 
// после чего сравнивает их и выводит одно из сообщений: “Первое число больше второго”, 
// “Второе число больше первого” или “Числа равны”.
// Есть проверка на корректный ввод.
// буквы кирилица и латиница, пробелы, 123фыв, 123asd, фыв123, asd123, символы, дробные

let firstNumber;
let secondNumber;

firstNumber = inputNumber("Введите первое число");
secondNumber = inputNumber("Введите второе число");

compareNumbers(firstNumber, secondNumber);

// ---
function inputNumber (message) {
	if (typeof message === 'undefined') {
		return;
	}

	let number;
	do {
		number = prompt(message, "");
	} while (isNumeric(number) == false);
	return number;
};

function isNumeric(number) {
	if (typeof number === 'undefined') {
		return;
	}

	let functionResult = false;
	//первое условие replace заменяет все пробелы на пустоту, /внутренности/ - регулярка,
	// \s возвращает пробелы, g-global - все пробелы, без него вернет только первый
	//количество пробелов равно 0 или является NotANumber нечисло
	//!Number.isInteger(Number(number)) проверка на дробные
	if (number.replace(/\s/g, "").length === 0 || isNaN(number) || !Number.isInteger(Number(number))) {
		functionResult = false;
		alert("Напишите число");
	} else {
		functionResult = true;
		alert(`Число ${number} принято`);
	}
	return functionResult;
}

function compareNumbers(a, b) {
	if (typeof a === 'undefined' || typeof b === 'undefined') {
		return;
	}

	if (a > b) {
		alert(`Число ${a} больше числа ${b}`);
    } else if (a < b) {
        alert(`Число ${b} больше числа ${a}`);
    } else {
        alert(`Числа ${a} и ${b} равны`);
	}
}