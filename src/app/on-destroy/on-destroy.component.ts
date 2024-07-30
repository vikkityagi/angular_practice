import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ChildComponentComponent } from './child-component/child-component.component';
import { Router, RouterModule } from '@angular/router';
import { HighlightComponent } from '../highlight/highlight.component';

@Component({
  selector: 'app-on-destroy',
  standalone: true,
  imports: [ChildComponentComponent,HighlightComponent,RouterModule],
  templateUrl: './on-destroy.component.html',
  styleUrl: './on-destroy.component.css'
})
export class OnDestroyComponent implements OnInit {

  constructor(private router:Router,private location:Location){}

  ngOnInit(){
    console.log('parent ngOnInit call');
  }

  back(){
    // this.router.navigate(['../../'])
    this.location.back()
  }

}
