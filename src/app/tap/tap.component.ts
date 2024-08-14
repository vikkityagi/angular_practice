import { Component, OnInit } from '@angular/core';
import { from, tap } from 'rxjs';

interface Car {
  id: number;
  carName: string;
}

@Component({
  selector: 'app-tap',
  standalone: true,
  imports: [],
  templateUrl: './tap.component.html',
  styleUrl: './tap.component.css'
})
export class TapComponent implements OnInit {

  carList: Car[] = [];
  myobservable: any;

  constructor(){
    for (let i = 1; i <= 50; i++) {
      this.carList.push({
        id: i,
        carName: `Car ${i}`
      });
    }

    this.myobservable = from(this.carList);
    
  }

  ngOnInit(): void {
      this.getData();
  }



  getData(){
    console.log('run')
    this.myobservable.pipe(tap((res:any)=>{
      if(res.id == 48){
        console.log(res.carName)
      }
    }
    )).subscribe({
      next: (data:any)=>{
        setTimeout(() => {
          console.log(data.carName)
        }, 1000);
      }
    })
  }

}
