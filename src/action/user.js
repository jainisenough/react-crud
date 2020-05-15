import { actionTypeCreator } from 'helper/action-helper';
//import { post } from 'helper/request';

export const userActionType = actionTypeCreator('USER');
export const login = (email, password) =>
  Promise.resolve({ response: { headers: { 'X-Access-Token': 'my-access-token' } } });
export const getUsers = () => ({ type: userActionType.pending });
export const setUsers = payload => ({ type: userActionType.fulfilled, payload: payload.data });
