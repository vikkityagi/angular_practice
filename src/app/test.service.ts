import { MyService } from "./interface/MyService.interface";



export class TestService implements MyService{

  id = 1;
  name = 'Sample Service';
  isActive = true;

  getDetails(): any {
    return {id:this.id,name:this.name};
  }

  saveDetails(id: number,name: string): void {
      this.name = name;
      this.id = id;
  }


}
