import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent implements OnInit,OnDestroy{

  ngOnInit(){
    console.log('child ngOnInit call');
  }

  ngOnDestroy(): void {
      alert('child onDestory call');
  }

}
