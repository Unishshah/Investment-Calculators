import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-carloan-calculator',
  templateUrl: './carloan-calculator.component.html',
  styleUrls: ['./carloan-calculator.component.css']
})
export class CarloanCalculatorComponent implements OnInit {

todo : number = 0;
total: number;
credit: number;
subjects: number;
counter : number = 0;
gap: number;
display: String;

adddgrade(value){
this.counter =this.counter + +1;
console.log(this.counter);

if(value == 'A')
{this.total = 4;}
if(value == 'B')
{this.total = 3;}
if(value == 'C')
{this.total = 2;}
if(value == 'D')
{this.total = 1;}
if(value == 'F')
{this.total = 0;}
this.todo = this.total + +this.todo;  
  console.log(this.todo);
    }
    
    calculate(credits1,subjects1)
    {
    this.credit = +credits1;
    console.log(this.credit);
    this.subjects = +subjects1;
    console.log(this.subjects);
    if(this.counter == this.subjects)
    {
    console.log("same")
    this.gap = this.todo/this.credit;
    console.log(this.gap);
    }
    else
    {
    alert("Grades entered do not match the subjects entered");
    }
     this.display = "Your GPA is " +this.gap+ "%";
    }

  constructor() { }

  ngOnInit() {
  }

}

