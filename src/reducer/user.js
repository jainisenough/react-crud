import { promiseState } from 'helper/action-helper';
import { userActionType } from 'action/user';

const initialState = { ...promiseState(false, false, false, null) };
export default (state = initialState, action) => {
  switch (action.type) {
    case userActionType.pending: {
      return {
        ...state,
        ...promiseState(true, false, false)
      };
    }
    case userActionType.fulfilled: {
      return {
        ...state,
        ...promiseState(false, true, false, action.payload)
      };
    }
    case userActionType.rejected: {
      return {
        ...state,
        ...promiseState(false, false, true)
      };
    }
    default:
      return state;
  }
};
