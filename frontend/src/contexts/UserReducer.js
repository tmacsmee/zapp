export const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        active: true,
      };
    default:
      return state;
  }
};

export const initialState = {
  active: false,
};
