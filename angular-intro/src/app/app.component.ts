import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-intro';

  choice : string = 'home';

  constructor(){
   /*  setTimeout(() => {
      this.title = 'Payroll Manager';
    }, 10000); */
  }
}
