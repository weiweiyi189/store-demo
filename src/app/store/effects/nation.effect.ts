import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import * as actions from '../actions/index';
import {AddNation, AddNationError, AddNationSuccess, GetAllNationsError, GetAllNationsSuccess} from '../actions';
import {NationService} from '../../../services/nation.service';

@Injectable()
export class NationEffect {
  constructor(private actions$: Actions,
              private nationsService: NationService) {
  }

  getAllNations$ = createEffect(() => {
    return this.actions$.pipe(
      tap((data) => console.log(data)),
      ofType(actions.GET_NATIONS),
      switchMap(() => this.nationsService.findAll()),
      map(response => new GetAllNationsSuccess(response)),
      catchError((err) => [new GetAllNationsError(err)])
    );
  });

  createNations$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.CREATE_NATION),
      map((action: AddNation) => action.payload),
      switchMap(newNation => this.nationsService.save(newNation)),
      map((response) => new AddNationSuccess(response.id)),
      catchError((err) => [new AddNationError(err)])
    );
  });


}
