import { Action } from '@ngrx/store';
import {Nation} from '../../../entity/nation';


export const GET_NATIONS = 'GET_NATIONS';
export const GET_NATIONS_SUCCESS = 'GET_NATIONS_SUCCESS';
export const GET_NATIONS_ERROR = 'GET_NATIONS_ERROR';

export const GET_NATION = 'GET_NATION';
export const GET_NATION_SUCCESS = 'GET_NATION_SUCCESS';
export const GET_NATION_ERROR = 'GET_NATION_ERROR';

export const CREATE_NATION = 'CREATE_NATION';
export const CREATE_NATION_SUCCESS = 'CREATE_NATION_SUCCESS';
export const CREATE_NATION_ERROR = 'CREATE_NATION_ERROR';

export const DELETE_NATION = 'DELETE_NATION';
export const DELETE_NATION_SUCCESS = 'DELETE_NATION_SUCCESS';
export const DELETE_NATION_ERROR = 'DELETE_NATION_ERROR';

export type NationActionTypes =
  GetAllNations | GetAllNationsSuccess | GetAllNationsError |
  GetNation | GetNationSuccess | GetNationError |
  AddNation | AddNationSuccess | AddNationError |
  RemoveNation | RemoveNationSuccess | RemoveNationError;


/**
 * get All
 */
export class GetAllNations implements Action {
  readonly type = GET_NATIONS;
}

export class GetAllNationsSuccess implements Action {
  readonly type = GET_NATIONS_SUCCESS;

  constructor(public payload: Nation[]) {
  }
}

export class GetAllNationsError implements Action {
  readonly type = GET_NATIONS_ERROR;

  constructor(public payload: any) {
  }
}

/****************************************
 * GET by id
 ****************************************/
export class GetNation implements Action {
  readonly type = GET_NATION;

  constructor(public payload: number) {
  }
}

export class GetNationSuccess implements Action {
  readonly type = GET_NATION_SUCCESS;

  constructor(public payload: Nation) {
  }
}

export class GetNationError implements Action {
  readonly type = GET_NATION_ERROR;

  constructor(public payload: any) {
  }
}

/****************************************
 * 新增
 ****************************************/
export class AddNation implements Action {
  readonly type = CREATE_NATION;

  constructor(public payload: Nation) {
  }
}

export class AddNationSuccess implements Action {
  readonly type = CREATE_NATION_SUCCESS;

  constructor(public payload: number) {
  }
}

export class AddNationError implements Action {
  readonly type = CREATE_NATION_ERROR;

  constructor(public payload: any) {
  }
}

/****************************************
 * 删除
 ****************************************/
export class RemoveNation implements Action {
  readonly type = DELETE_NATION;

  constructor(public payload: number) {
  }
}

export class RemoveNationSuccess implements Action {
  readonly type = DELETE_NATION_SUCCESS;

  constructor(public payload: Nation) {
  }
}

export class RemoveNationError implements Action {
  readonly type = DELETE_NATION_ERROR;

  constructor(public payload: any) {
  }
}

