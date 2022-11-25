// CURRYING
export const payloadCreator = (asyncFunction) => async (arg, thunkAPI) => {
  try {
    const resonse = await asyncFunction(arg);
    return resonse;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};
