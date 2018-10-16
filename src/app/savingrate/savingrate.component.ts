import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-savingrate',
  templateUrl: './savingrate.component.html',
  styleUrls: ['./savingrate.component.css']
})
export class SavingrateComponent implements OnInit {

    totalincome: number;
    incometax: number;
    statetax: number;
    paytax: number;
    result: number;
    tax: number;
    calculation: number;
    finalvalue: number;
    totalsaving: number;
    display: String;
    
   
   savings(totalincome1,incometax1,statetax1,paytax1,totalsaving1){
    console.log("Inside the calculation")
     var x = +totalincome1;
     this.totalincome= x;
     console.log(x);
     var w = +paytax1;
     this.paytax = w;
     console.log(w);
     var y = +incometax1;
     this.statetax = y;
     console.log(y);
     var z = +statetax1;
     this.paytax = z
     console.log(z);
     this.tax = ( w + y + z);  
     console.log(this.tax);
     this.calculation = this.totalincome - this.tax;
     console.log(this.calculation);
     this.totalsaving = +totalsaving1;
     console.log(this.totalsaving);
     this.finalvalue = (this.totalsaving/this.calculation) * 100;
     console.log(this.finalvalue);
     this.display = "Your saving rate is " +this.finalvalue+ "%";
    
    }


  constructor() { }

  ngOnInit() {
  }

}
