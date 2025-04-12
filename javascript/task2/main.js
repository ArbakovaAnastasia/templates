// Программа выводит в консоль все високосные годы от 1900 до 2016.
// Программа принимает начальный и конечный год от пользователя.
// Есть проверка на ввод от 1900 до 2016 + корректный ввод, когда начальный год больше или равен конечному.

let firstYear;
let secondYear;

do {
	firstYear = inputMessageYear("Введите начальный год");
	secondYear = inputMessageYear("Введите конечный год");
} while (compareYears(firstYear, secondYear) == false);

leapYear(firstYear, secondYear);

// ---
function inputMessageYear(message) {
	let year;
	do {
		year = prompt(message, "");
	} while (selectYear(year) == false);
	return year;
}

function selectYear(year) {
	let selectYearResult = false;
	if (year < 1900 || year > 2016 || year.replace(/\s/g, "").length === 0 || isNaN(year)) {
		selectYearResult = false;
		alert("Введите корректное число от 1900 до 2016");
	} else {
		selectYearResult = true;
		alert("Год " + year + " принято");
	}
	return selectYearResult;
}

function compareYears(firstYear, secondYear) {
	let compareYearResult;
	if (firstYear > secondYear) {
		alert('Начальный год не может быть больше конечного. Введите еще раз.');
		compareYearResult = false;
	} else if (firstYear == secondYear) {
		alert('Года не могут быть равны. Введите еще раз.');
		compareYearResult = false;
	} else {
		alert('Числа успешно введены');
		compareYearResult = true;
	};
	return compareYearResult;
} 

function leapYear(firstYear, secondYear) {
	for (let i = firstYear; i <= secondYear; i++) {
		if ((i % 400) == 0 || ((i % 4) == 0 && (i % 100) != 0)) {
			console.log(i);
		}
	};
}