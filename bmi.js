//BMI class stores constructor that has two arguments assigned
class BMI {
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }

    //calculateBMI medthod calculates the bmi using the formula and returns the result as 'bmi'
    calculateBMI(){
        let bmi = this.weight/(this.height**2);
        return bmi;
    }
}

//MyBmi assignes the two values to 'height'and 'weight'
let MyBmi = new BMI(2, 90);

//MyBmi gives the values to the method 'calculateBMI' which is then calculated by it
let calculatedBMI = MyBmi.calculateBMI();

//This prints the result of the calculations in the console
console.log(calculatedBMI);