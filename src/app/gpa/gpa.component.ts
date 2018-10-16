import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

loanamount: number;
interestrate: number;
years: number;
display: String;

payment(loanamount1,interestrate1,years1)
{
this.loanamount = +loanamount1;
console.log(this.loanamount);
this.years = +years1;
console.log(this.years);
var u = +interestrate1;
this.interestrate = (u/12)/100;
console.log(this.interestrate);
var x = this.loanamount*(this.interestrate*(Math.pow((1+this.interestrate),this.years)));
console.log(x);
var y = (Math.pow((1+this.interestrate),this.years)) - 1;
console.log(y);
var z = x/y;
console.log(z);
 this.display = "Your monthly payment is " +z+ "%";
}

  constructor() { }

  ngOnInit() {
  }

}
