import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ShareService } from '../../share.service';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component   {

  @ViewChild('myInput') myInput: any = ElementRef;
  reqData: any;

  constructor(private sahredService: ShareService,
    private cdr: ChangeDetectorRef
  ) {

    this.reqData = '';
  }

  public change(value: any) {
    this.sahredService.exclusive.next(value);
  }

  


  

}
