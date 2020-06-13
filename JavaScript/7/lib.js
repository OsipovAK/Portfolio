function Vehicle(color, mark, model) {
    this.color = color;
    this.mark = mark;
    this.model = model;
    this.startMoving = function () {
        alert('Трогаемся');
    }
}

// Vehicle.prototype.startMoving = function () {
//     alert('Трогаемся');
// };

function Airplane(color, mark, model, wingLength) {
    Vehicle.apply(this, arguments);
    this.fuel = 'Авиатопливо';
    this.vehicle = 'Cамолёт';
    this.wingLength = wingLength;
    this.startMoving = function () {
        alert('Полетели');
    }
}

function Car(color, mark, model, doors) {
    Vehicle.apply(this, arguments);
    this.fuel = 'Бензин';
    this.vehicle = 'Автомобиль';
    this.doors = doors;
    this.startMoving = function () {
        alert('Поехали');
    }
}

function Ship(color, mark, waterDisplacement) {
    Vehicle.call(this, 'color', 'mark');
    this.model = 'Уточнение модели не найдено'
    this.fuel = 'Дизель';
    this.vehicle = 'Корабль';
    this.waterDisplacement = waterDisplacement;
    this.startMoving = function () {
        alert('Отчаливаем');
    }
}

var someVehicle = new Vehicle('someColor', 'someMark', 'someModel')
var boeing = new Airplane('white', 'Boeing', '737', '34,3m');
var toyota = new Car('red', 'Toyota', 'Corola', 5);
var titanic = new Ship('black', 'Titanic', 52310);