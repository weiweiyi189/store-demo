import { Action } from '@ngrx/store';

export const ADD_ACTION = 'ADD_ACTION';
export const EDIT_ACTION = 'EDIT_ACTION';

export type NationActionTypes = AddNationAction | EditNationAction;


export class AddNationAction implements Action {
  readonly type = ADD_ACTION;
}

export class EditNationAction implements Action {
  readonly type = EDIT_ACTION;
}


