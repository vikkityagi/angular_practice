import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Output() subtract = new EventEmitter<any>();

  public decrease(value: any){

    this.subtract.emit(value);

  }

}
