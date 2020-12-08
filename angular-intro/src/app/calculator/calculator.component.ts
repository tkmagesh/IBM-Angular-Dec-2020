import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
    selector : 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent{
    n1 : number = 0;
    n2 : number = 0;
    result : number = 0;
    
    /* 
    private calculatorService : CalculatorService ;

    constructor(calculatorService : CalculatorService){
        this.calculatorService = calculatorService;
    } 
    */

    constructor(private calculatorService : CalculatorService){
        
    } 

    setN1(value : string ){
        this.n1 = parseInt(value);
    }

    setN2(value : string ){
        this.n2 = parseInt(value);
    }

    onAddClick(){
        this.result = this.calculatorService.add(this.n1 , this.n2);
    }

    onSubtractClick(){
        this.result = this.calculatorService.subtract(this.n1 , this.n2);
    }

     onMultiplyClick(){
        this.result = this.calculatorService.multiply(this.n1 , this.n2);
    }

     onDivideClick(){
        this.result = this.calculatorService.divide(this.n1 , this.n2);
    }
}