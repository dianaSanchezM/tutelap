import * as types from './actionTypes';

export const fetchTutelasSuccess = (tutelas) => ({
  type: types.FETCH_TUTELAS_SUCCESS,
  payload: tutelas
});

export const fetchTutelaSuccess = (tutela) => ({
  type: types.FETCH_TUTELA_SUCCESS,
  payload: tutela
});

export const createTutelaSuccess = (tutela) => ({
  type: types.CREATE_TUTELA_SUCCESS,
  payload: tutela
});

export const updateTutelaSuccess = (tutela) => ({
  type: types.UPDATE_TUTELA_SUCCESS,
  payload: tutela
});

export const deleteTutelaSuccess = (id) => ({
  type: types.DELETE_TUTELA_SUCCESS,
  payload: id
});

export const setUserId = (userId) => ({
  type: types.SET_USER_ID,
  payload: userId
});