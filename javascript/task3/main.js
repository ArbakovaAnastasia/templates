// Программа последовательно запрашивает у пользователя числа при помощи prompt, пока он не нажмет “Отмена”. 
// После нажатия “Отмена”, программа выводит сумму введенных чисел при помощи alert.
// Есть проверка на ввод.

let number;
let sum = 0;

while (number = prompt('Введите число, кнопка Отмена - выход', '')) {
    (number.replace(/\s/g, "").length === 0 || isNaN(number) || !Number.isInteger(Number(number))) ? alert("Некорректный ввод") : sum = sum + parseInt(number);
}

alert(sum);