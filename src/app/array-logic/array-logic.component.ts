import { Component } from '@angular/core';

@Component({
  selector: 'app-array-logic',
  standalone: true,
  imports: [],
  templateUrl: './array-logic.component.html',
  styleUrl: './array-logic.component.css'
})
export class ArrayLogicComponent {

  arr1: any[] = [
    { id: 1, name: 'BOB', salary: 100 },
    { id: 2, name: 'Jim', salary: 200 },
    { id: 3, name: 'Tavis', salary: 300 },
    { id: 4, name: 'BOB', salary: 100 },
    { id: 5, name: 'Jim', salary: 200 },
  ];
  arr2: any[] = [];
  count: any;

  constructor() {
    this.calc(this.arr1);

    console.log(this.arr2)
  }

  calc(arr: any[]) {
    for (let i = 0; i < arr.length; i++) {
      this.count = arr[i].salary;
      if (i == 0) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i].name === arr[j].name && arr[i].salary === arr[j].salary) {
            this.count += arr[j].salary;
          }
        }
        if (this.arr2.includes(arr[i]))
          this.arr2.push({ name: arr[i].name, salary: this.count });
      } else {
        for (let j = 0; j < arr.length; j++) {
          if (j == i) continue;
          if (arr[i].name === arr[j].name && arr[i].salary === arr[j].salary) {
            this.count += arr[j].salary;
          }
        }
        if (this.arr2.includes(arr[i]))
          this.arr2.push({ name: arr[i].name, salary: this.count });
      }
    }
  }

}
