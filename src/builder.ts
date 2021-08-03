type ICarOptionsColor = 'Black' | 'White' | 'Red';
type ICarOptionsTranmission = 'Automatic' | 'Manual';

interface ICarOptions {
    exteriorColor?: ICarOptionsColor;
    tranmissionType?: ICarOptionsTranmission;
    price: number;
    modelNumber?: string;
}

class Car {

    private carOptions: ICarOptions;

    constructor(options: ICarOptions) {
        this.carOptions = options;
    }

    withExteriroColor(color: ICarOptionsColor) {
        this.carOptions.exteriorColor = color;
        return this;
    }

    withModelNumber(modelNumber: string) {
        this.carOptions.modelNumber = modelNumber;
        return this;
    }
}

let myCar = new Car({
    tranmissionType: 'Automatic',
    price: 47000});

console.log(myCar)
console.log(myCar.withExteriroColor('Red'))
console.log(myCar.withModelNumber('AZ723/21'))