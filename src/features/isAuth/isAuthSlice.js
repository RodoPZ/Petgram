const initialState = {
  isAuth: false,
};

export const authActions = {
  activate: "isAuth/activate",
  deactivate: "isAuth/deactivate",
};

export function isAuthReducer(state = initialState, action) {
  switch (action.type) {
    case authActions.activate:
      return { ...state, isAuth: true };
    case authActions.deactivate:
      return { ...state, isAuth: false };
    default:
      return state;
  }
}

export const activateAuth = (token) => (dispatch) => {
  dispatch({ type: authActions.activate });
  sessionStorage.setItem("token", token);
};

export const deactivateAuth = () => (dispatch) => {
  dispatch({ type: authActions.deactivate });
  sessionStorage.removeItem("token");
};
