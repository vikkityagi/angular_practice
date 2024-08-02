import { Injectable } from '@angular/core';
import { MyService } from './interface/MyService.interface';


export class Test2Service implements MyService {

  id = 3;
  name = 'Test2 Service';
  isActive = true;

  getDetails(): any {
    return {id:this.id,name:this.name};
  }

  saveDetails(id: number,name: string): void {
      this.name = name;
      this.id = id;
  }
}
