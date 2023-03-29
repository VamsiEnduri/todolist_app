const initial_state = {
  User_data: [],
};

export const todoReducers = (state = initial_state, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        User_data: [...state.User_data, action.paylaod],
      };

    case "REMOVE_DATA":
      const dltdata = state.User_data.filter((elem, k) => k != action.paylaod);
      return {
        ...state,
        User_data: dltdata,
      };
    default:
      return state;
  }
};
