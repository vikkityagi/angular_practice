import { Component } from '@angular/core';
import { concatMap, delay, from, map, mergeAll, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  standalone: true,
  imports: [],
  templateUrl: './merge-map.component.html',
  styleUrl: './merge-map.component.css'
})
export class MergeMapComponent {

  myList = from(["Tech","Entertainment","Comedy"]);

  constructor(){
    this.getList();
  }

  addData(data:string){
    return of(data+' video uploaded').pipe(delay(2000));
  }


  
 ///////////////////
 //
 //   Map
 //
 //////////////////


  // getList(){
  //   this.myList.pipe(map((res:any)=> this.addData(res))).subscribe({
  //     next: data=>{
  //      data.subscribe({
  //       next: (data2: any)=>{
  //         console.log(data2)
  //       }
  //      })
  //     }
  //   })
  // }


  ///////////////////
 //
 //   mergeAll()
 //
 //////////////////


  // getList(){
  //   this.myList.pipe(map((res:any)=> this.addData(res)),mergeAll()).subscribe({
  //     next: data=>{
  //      console.log(data);
  //     }
  //   })
  // }


   ///////////////////
 //
 //   mergeMap()
 //
 //////////////////

  // getList(){
  //   this.myList.pipe(mergeMap((res:any)=> this.addData(res))).subscribe({
  //     next: data=>{
  //      console.log(data);
  //     }
  //   })
  // }

  // getList(){
  //   this.myList.pipe(concatMap((res:any)=> this.addData(res))).subscribe({
  //     next: data=>{
  //      console.log(data);
  //     }
  //   })
  // }

  getList(){
    this.myList.pipe(mergeMap((res:any)=> this.addData(res))).subscribe({
      next: data=>{
       console.log(data);
      }
    })
  }


}
