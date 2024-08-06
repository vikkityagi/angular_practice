import { State, Action, StateContext, Selector } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { MinistryStateModel } from '../model/ministry.model';
import { LoadMinistryData } from '../action/ministry.action';




@State<MinistryStateModel>({
  name: 'ministry',
  defaults: {
    ministryData: {}
  }
})
@Injectable()
export class MinistryState {
  constructor(private http: HttpClient) {}

  // @Selector()
  // static getMinistryData(state: MinistryStateModel) {
  //   return state ? state.ministryData : [];
  // }

  @Action(LoadMinistryData)
  loadMinistryData(ctx: StateContext<MinistryStateModel>) {
    const state = ctx.getState();
    
       this.http.get('http://localhost:3002/api/v1/ministry').pipe(
        tap((result: any) => {
          console.log('API result:', result); // Log the API result
          const ministryResources = result?._embedded?.ministryResources || [];
          console.log('Processed ministry resources:', ministryResources); // Log processed data
          ctx.setState({
            ministryData: ministryResources
          });
        }),
      );
    
  }
}
