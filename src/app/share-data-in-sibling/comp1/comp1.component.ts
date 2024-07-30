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
export class Comp1Component implements AfterViewInit {

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

  ngAfterViewInit(): void {
    const searchTerm = fromEvent(this.myInput.nativeElement, 'keyup').pipe(
      map(
        (event: any) => event?.target.value),
      debounceTime(500),
      distinctUntilChanged()
    );

    searchTerm.subscribe((event: any) => {
      this.reqData = this.myInput.nativeElement.value;
      console.log(this.reqData)
    });


  }

}
