import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges {

  @Input() data:any;
  firstNumber: number = 25;
  result:any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.calculateResult();
    }
  }

  calculateResult() {
    // Convert data to a number if it's a string
    const dataAsNumber = typeof this.data === 'string' ? parseFloat(this.data) : this.data;
    
    // Ensure that dataAsNumber is a number, defaulting to 0 if conversion fails
    this.result = this.firstNumber + (isNaN(dataAsNumber) ? 0 : dataAsNumber);
  }

}
