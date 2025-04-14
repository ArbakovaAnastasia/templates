// Программа авторизации. Создать массив users, в котором каждый элемент –
// это объект типа “пользователь” со свойствами “имя”, “логин” и “пароль”. 
// Программа запрашивает у пользователя логин и пароль при помощи prompt, 
// после чего проходить по массиву users и искать в нем объект с такими же значениями.
// Если пользователь найден в массиве users, то программа должна поздороваться с ним по имени. 
// В противном случае должна появиться ошибка авторизации.

const USERS = [
    {
        name: 'admin',
        login: 'admin',
        password: 'admin'
    },
    {
        name: 'nastya',
        login: 'nastya',
        password: '123'
    },
    {
        name: 'billie',
        login: 'billie',
        password: '456'
    }
];

let userFound = false;

while (!userFound) {
    const inputLogin = prompt('Введите логин', '');
    const inputPassword = prompt('Введите пароль', '');
    
    const user = USERS.find(user => user.login === inputLogin && user.password === inputPassword);

    if (user) {
        userFound = true;
        alert(`Привет, ${user.name}!`);
    } else {
        alert('Неверный логин или пароль. Попробуйте еще раз.');
    }
}





