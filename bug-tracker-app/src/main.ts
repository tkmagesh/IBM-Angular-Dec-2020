import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//Using axios and promises
/* 
import axios from 'axios';
const p = axios.get('http://localhost:3000/bugs');
p.then(response => console.table(response.data)); 
*/

/* 
import * as calc from './calculator'
console.log(calc);
console.log(calc.add(100,200)); 

*/

/* 
import * as calc from './calculator';
//const add = calc.add;
const { add } = calc; */

/* 
import { add } from './calculator';
console.log(add(300,200)); 
*/

/* 
import calc from './calculator';
console.log(calc); 
*/

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
