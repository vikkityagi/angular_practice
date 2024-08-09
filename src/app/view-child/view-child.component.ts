import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ViewChildChildComponent } from './view-child-child/view-child-child.component';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [ViewChildChildComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent   {

  @ViewChild('myinput1') myinputvw1! : ElementRef;

  // question 3
  @ViewChild(ViewChildChildComponent) childComponent!: ViewChildChildComponent;


  question1(){
    console.log(this.myinputvw1.nativeElement.value);
  }

  question2(value:any){
    console.log(value);
  }

    // question 3
    fetch() {
    console.log(this.childComponent.title+' in parent');
  }

}
