import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Binding';
  public greeting="";
  onClick(){
    console.log('Welcome to this page')
    this.greeting='Welcome to this page';
    
    console.log('employees');
  }
}
