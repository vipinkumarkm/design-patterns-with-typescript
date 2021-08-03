/* Base abstract car */
abstract class Car {

    public description: string;
    
    public getDescription(): string {
        return this.description;
    }

    public abstract cost(): number;
}

/** Amarok base model */
class Amarok extends Car {

    public description = 'Amarok Model';

    public cost(): number {
        return 35000;
    }
}

/** Golf base model */
class Golf extends Car {

    public description = 'Golf model';

    public cost(): number {
        return 45000;
    }
}

/** Abstract carConfigurations */
abstract class carConfiguration extends Car {

    configuredCar: Car;
    public abstract getDescription(): string;
    public abstract cost(): number;
}

/** Driver assistance package */
class driverAssistancePackage extends carConfiguration {
    
    configuredCar: Car;
    private costIncluded: number = 3000;

    constructor(car: Car) {
        super();
        this.configuredCar = car;
    }

    public getDescription(): string {
        return this.configuredCar.getDescription() + ', Driver assistance package';
    }

    public cost(): number {
        return this.configuredCar.cost() + this.costIncluded;
    }
}

/** Automatic transmission engine */
class automaticTransmissionEngine extends carConfiguration {

    configuredCar: Car;
    private costIncluded: number = 1500;

    constructor(car: Car) {
        super();
        this.configuredCar = car;
    }
    
    public getDescription(): string {
        return this.configuredCar.getDescription() + ', Automatic transmission engine';
    }

    public cost(): number {
        return this.configuredCar.cost() + this.costIncluded;
    }
}

let volkswagenCar = new Amarok();
volkswagenCar = new driverAssistancePackage(volkswagenCar)
volkswagenCar = new automaticTransmissionEngine(volkswagenCar)
console.log( volkswagenCar.getDescription() + ' for $' + volkswagenCar.cost());