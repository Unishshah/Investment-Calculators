import { Component,Input } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    invest: number;
    returned: number;
    years: number;
    result: number;
    display: String;
    
   
   addTodo(invest1,returned1,years1){
    console.log("Inside the calculation")
     var x = +invest1;
     this.invest= x;
     var y = +returned1;
     this.returned = y;
     var z = +years1;
     this.years = z
     this.result =  ((this.invest-this.returned)/this.returned)*100;
     console.log(this.result)
     this.display = "Your RIO value is " +this.result+ "%";
    
    }
    

}


