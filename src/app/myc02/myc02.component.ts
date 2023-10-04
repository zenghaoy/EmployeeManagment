import { Component } from '@angular/core';

@Component({
  selector: 'app-myc02',
  templateUrl: './myc02.component.html',
  styleUrls: ['./myc02.component.css'],
})
export class Myc02Component {
  title = { name: 'Harry', age: 12 };

  prop = 'prop binding';

  test() {
    console.log('Harry');
    console.log('Zhang');
  }
}
