export default (state = {}, action) => {
  switch (action.type) {
    case 'persist/PURGE': {
      return undefined;
    }
    default:
      return state;
  }
};
