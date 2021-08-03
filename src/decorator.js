var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* Base abstract car */
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getDescription = function () {
        return this.description;
    };
    return Car;
}());
/** Amarok base model */
var Amarok = /** @class */ (function (_super) {
    __extends(Amarok, _super);
    function Amarok() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = 'Amarok Model';
        return _this;
    }
    Amarok.prototype.cost = function () {
        return 35000;
    };
    return Amarok;
}(Car));
/** Golf base model */
var Golf = /** @class */ (function (_super) {
    __extends(Golf, _super);
    function Golf() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = 'Golf model';
        return _this;
    }
    Golf.prototype.cost = function () {
        return 45000;
    };
    return Golf;
}(Car));
/** Abstract carConfigurations */
var carConfiguration = /** @class */ (function (_super) {
    __extends(carConfiguration, _super);
    function carConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return carConfiguration;
}(Car));
/** Driver assistance package */
var driverAssistancePackage = /** @class */ (function (_super) {
    __extends(driverAssistancePackage, _super);
    function driverAssistancePackage(car) {
        var _this = _super.call(this) || this;
        _this.costIncluded = 3000;
        _this.configuredCar = car;
        return _this;
    }
    driverAssistancePackage.prototype.getDescription = function () {
        return this.configuredCar.getDescription() + ', Driver assistance package';
    };
    driverAssistancePackage.prototype.cost = function () {
        return this.configuredCar.cost() + this.costIncluded;
    };
    return driverAssistancePackage;
}(carConfiguration));
/** Automatic transmission engine */
var automaticTransmissionEngine = /** @class */ (function (_super) {
    __extends(automaticTransmissionEngine, _super);
    function automaticTransmissionEngine(car) {
        var _this = _super.call(this) || this;
        _this.costIncluded = 1500;
        _this.configuredCar = car;
        return _this;
    }
    automaticTransmissionEngine.prototype.getDescription = function () {
        return this.configuredCar.getDescription() + ', Automatic transmission engine';
    };
    automaticTransmissionEngine.prototype.cost = function () {
        return this.configuredCar.cost() + this.costIncluded;
    };
    return automaticTransmissionEngine;
}(carConfiguration));
var volkswagenCar = new Amarok();
volkswagenCar = new driverAssistancePackage(volkswagenCar);
volkswagenCar = new automaticTransmissionEngine(volkswagenCar);
console.log(volkswagenCar.getDescription() + ' for $' + volkswagenCar.cost());
