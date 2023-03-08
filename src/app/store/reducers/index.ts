import { ActionReducerMap } from '@ngrx/store';
import * as nationReducer from './nation.reducer';
export interface ElementsState {
  nation: nationReducer.State;
}

export const reducers: ActionReducerMap<ElementsState> = {
  nation: nationReducer.reducer,
};

