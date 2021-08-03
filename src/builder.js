var Car = /** @class */ (function () {
    function Car(options) {
        this.carOptions = options;
    }
    Car.prototype.withExteriroColor = function (color) {
        this.carOptions.exteriorColor = color;
        return this;
    };
    Car.prototype.withModelNumber = function (modelNumber) {
        this.carOptions.modelNumber = modelNumber;
        return this;
    };
    return Car;
}());
var myCar = new Car({
    tranmissionType: 'Automatic',
    price: 47000
});
console.log(myCar);
console.log(myCar.withExteriroColor('Red'));
console.log(myCar.withModelNumber('AZ723/21'));
