export const actionTypeCreator = (actionName, custom, defaultAction) => {
  let obj = {};

  if (custom) {
    Object.entries(custom).forEach(([k, v]) => {
      obj[k] = `${actionName}_${String(v).toUpperCase()}`;
    });
  }

  if (defaultAction === undefined || defaultAction) {
    obj.pending = `${actionName}_PENDING`;
    obj.fulfilled = `${actionName}_FULFILLED`;
    obj.rejected = `${actionName}_REJECTED`;
  }

  return obj;
};

export const promiseState = (isPending, isFulfilled, isRejected, data) => {
  const obj = {
    isPending,
    isFulfilled,
    isRejected
  };

  if (data) {
    obj.data = data;
  }
  return obj;
};
