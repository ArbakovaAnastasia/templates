// Создать иерархию сущностей (конструкторов, из которых можно создать экземпляры объектов): <br>
// базовый конструктор «Транспортное средство» с общими для всех транспортных средств свойствами и методами (на ваше усмотрение); <br>
// дочерние конструкторы: автомобиль, самолет, корабль, которые наследуют общие свойства и методы от родительского; <br>
// продемонстрировать, как дочерние сущности могут переопределять родительские свойства и методы в соответствии со своим собственным поведением. <br>

function Transport(weight, licence) {
    this.weight = weight;
    this.licence = licence;
    this.voice = function() {
        console.log('Я не имею звука, я общий класс');
    }
}
function Car(weight, licence) {
    Transport.apply(this, arguments);
    this.voice = function() {
        console.log('БИП! БИП!');
    }
}
function Airplane(weight, licence) {
    Transport.apply(this, arguments);
    this.voice = function() {
        console.log('ВЖУХ! ВЖУХ!');
    }
}
function Ship(weight, licence) {
    Transport.apply(this, arguments);
    this.voice = function() {
        console.log('БУЛЬ! БУЛЬ!');
    }
}
var transport = new Transport();
var car = new Car('1000кг', 'B');
var airplane = new Airplane('50тонн', 'PPL');
var ship = new Ship('350тонн', 'ВВП');

console.log(transport);
transport.voice();
console.log(car);
car.voice();
console.log(airplane);
airplane.voice();
console.log(ship);
ship.voice();