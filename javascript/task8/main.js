// Написать простой прототип системы регистрации пользователей. Для этого используйте две функции-конструктора: <br>
// 1. User, которая создает объект типа «пользователь» со следующими свойствами: { // имя firstName: ‘', // фамилия lastName: '’, // дата и время регистрации regDate: ''}. Объекты типа User предназначены для сохранения каждой отдельной записи о пользователе.<br>
// 2. UserList, которая создает объект типа “список пользователей” со следующими свойствами и методами: { // внутреннее свойство-массив, в которое будут попадать объекты типа User users: [], // метод получает в качестве параметра объект типа User и сохраняет его в массив users add: function(user) {}, <br>
// // метод возвращает список пользователей из массива users getAllUsers: function() {}}. Объекты типа UserList предназначены для хранения множества записей типа User. <br>
// При запуске программы должно происходить:<br>
// 1. Создавать новый экземпляр объекта UserList (с пустым свойством-массивом users). <br>
// 2. Открываться диалог prompt с предложением ввести имя и фамилию пользователя для регистрации (одной строкой через пробел). <br>
// 3. После нажатия ОК должен создаваться новый экземпляр объекта User с заполнением свойств firstName, lastName и regDate (текущая дата и время). <br>
// 4. Созданный экземпляр объекта должен сохраняться в свойство-массив users созданного ранее объекта типа UserList (при помощи метода add). <br>
// 5. Диалог prompt должен повторяться, пока пользователь не нажмет “Отмена”. <br>
// 6. После нажатия «Отмена» выведите на экран (в консоль или при помощи alert) список всех пользователей с именами и датами регистрации (используйте для этого метод getAllUsers). <br>


function User(firstName, lastName, regDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.regDate = regDate;
};

function UserList() {
    this.users = [];
    this.addUser = function(user) {
        this.users.push(user);
    };
    this.getAllUsers = function() {
        if (this.users.length === 0) {
            alert('Нет зарегистрированных пользователей');
            return;
        }
        let userList = this.users.map(user => `${user.firstName} ${user.lastName}`).join('\n');
        alert('Список пользователей:\n' + userList);
    };
};

function getUserName() {
    while (true) {
        let fullName = prompt('Введите имя и фамилию через пробел', '');
        if (fullName === null) return null;

        let nameParts = fullName.split(' ');

        // Проверяем, что имя и фамилия содержат только буквы
        let namePattern = /^[A-Za-zА-Яа-яЁё]+$/;

        if (nameParts.length != 2 ) {
            alert('Пожалуйста, введите 2 слова - имя и фамилию через пробел');
        } else if (!namePattern.test(nameParts[0]) || !namePattern.test(nameParts[1])) {
            alert('Имя и фамилия должны содержать только буквы');
        } else {
            return {
                firstName: nameParts[0],
                lastName: nameParts[1]
            };
        }
    }
}

let userList = new UserList();

while (true) {
    let registration = new Date();
    let userName = getUserName();
    if (userName === null) break;
    let user = new User(userName.firstName, userName.lastName, registration);
    userList.addUser(user);
}

userList.getAllUsers();