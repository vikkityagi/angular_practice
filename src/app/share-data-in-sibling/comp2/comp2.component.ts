import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../share.service';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component implements OnInit {

  currentValue: string = "test";


  constructor(private sharedService: ShareService){}

  ngOnInit(): void {
    
    this.sharedService.exclusive.subscribe({
      next: data=>{
        this.currentValue = data;
      },
      error: error=>{
        console.log(error)
      }
    })
  }

  

}
