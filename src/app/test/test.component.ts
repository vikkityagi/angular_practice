// test.component.ts
import { Component } from '@angular/core';
import { TestService } from '../test.service';
import { MyService } from '../interface/MyService.interface';



@Component({
  selector: 'app-test',
  standalone: true,
  template: `
    <button type="button" class="btn btn-primary" (click)="saveData(2, 'Test Data')">Save Data</button>
    {{ data }}<br>
    {{ data.id }}<br>
    {{ data.name }}
  `,
  styleUrls: ['./test.component.css'],
  providers: [
    { provide: MyService, useClass: TestService } 
  ]
})
export class TestComponent {
  data!: any;

  constructor(private myService: MyService) {
    this.getData();
  }

  public saveData(id: number, name: string) {
    this.myService.saveDetails(id, name);
    this.getData();
  }

  public getData() {
    this.data = this.myService.getDetails();
    console.log(this.data.id);
    console.log(this.data.name);
  }
}
