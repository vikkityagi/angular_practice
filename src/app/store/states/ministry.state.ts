import { State, Action, StateContext, Selector } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { MinistryStateModel } from '../model/ministry.model';
import { LoadMinistryData, RemoveMinistryData } from '../action/ministry.action';

@State<MinistryStateModel>({
  name: 'ministry',
  defaults: {
    ministryData: {}
  }
})
@Injectable()
export class MinistryState {
  constructor(private http: HttpClient) {}

  @Selector()
  static getMinistryData(state: MinistryStateModel) {
    return state.ministryData;
  }

  @Selector()
  static deleteMinistryData(state: MinistryStateModel) {
    return state.ministryData.defaults.ministryData;
  }

  @Action(LoadMinistryData)
  loadMinistryData(ctx: StateContext<MinistryStateModel>) {
    const state = ctx.getState();

    if (Object.keys(state.ministryData).length === 0) { // Check if ministryData is empty
      return this.http.get('http://localhost:3002/api/v1/ministry').pipe(
        tap((result: any) => {
          console.log('API result:', result); // Log the API result
          const ministryResources = result?._embedded?.ministryResources;
          console.log('Processed ministry resources:', ministryResources); // Log processed data
          ctx.patchState({
            ministryData: ministryResources || {}
          });
        }),
        catchError((error) => {
          console.error('Error loading ministry data:', error);
          return of(error); // Handle error appropriately
        })
      );
    } else {
      return of(state.ministryData); // Return existing state data as observable
    }
  }

  //remove the post action
  @Action(RemoveMinistryData) 
  removeMinistryData(ctx: StateContext<MinistryStateModel>){
    const state = ctx.getState();
    ctx.patchState({
        ministryData: {}
    })
}
}
