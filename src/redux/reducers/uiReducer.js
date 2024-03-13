const initialState = {
  isNavOpen: false,
  isCartNavOpen: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_NAVBAR":
      return {
        ...state,
        isNavOpen: !state.isNavOpen,
      };
    case "TOGGLE_CARTNAV":
      return {
        ...state,
        isCartNavOpen: !state.isCartNavOpen,
      };
    default:
      return state;
  }
};

export default uiReducer;
