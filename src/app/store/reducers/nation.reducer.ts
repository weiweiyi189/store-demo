import * as actions from '../actions/index';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Nation } from '../../../entity/nation';
import { AppAction } from '../actions/index';
import { ElementsState } from './index';

export interface State {
  data: Nation[];
  selected: Nation;
  loading: boolean;
  error: string;
}

const initialState: State = {
  data: [],
  selected: {} as Nation,
  loading: false,
  error: '',
};

export function reducer(state = initialState, action: AppAction): State {
  switch (action.type) {
    case actions.GET_NATIONS:
      console.log(1);
      return {
        ...state,
        loading: true,
      };
    case actions.GET_NATIONS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: true,
      };
    case actions.GET_NATIONS_ERROR:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };

    case actions.GET_NATION:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_NATION_SUCCESS:
      return {
        ...state,
        loading: true,
        selected: action.payload,
      };
    case actions.GET_NATION_ERROR:
      return {
        ...state,
        selected: {} as Nation,
        loading: true,
        error: action.payload,
      };

    case actions.CREATE_NATION:
      return {
        ...state,
        selected: action.payload,
        loading: true,
      };
    case actions.CREATE_NATION_SUCCESS: {
      const newNation = {
        ...state.selected,
        id: action.payload,
        loading: true,
      };
      const data = [...state.data, newNation];
      return {
        ...state,
        data,
        loading: true,
      };
    }
    case actions.CREATE_NATION_ERROR:
      return {
        ...state,
        selected: {} as Nation,
        loading: true,
        error: action.payload,
      };
  }
  return state;
}

/**
 *
 */
export const getElementsState =
  createFeatureSelector<ElementsState>('elements');

const getNationsState = createSelector(
  getElementsState,
  (state: ElementsState) => state.nation
);

export const getAllNations = createSelector(getNationsState, (state: State) => {
  return state.loading ? state.data : [];
});
export const getNation = createSelector(getNationsState, (state: State) => {
  return state.loading ? state.selected : {};
});
