import { getAuthUserData } from "./auth-reduser";

const INITIALISED_SUCCESS = "app/INITIALISED_SUCCESS";

const initialState = {
  initialised: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALISED_SUCCESS:
      return {
        ...state,
        initialised: true,
      };

    default:
      return state;
  }
};

export const initialisedSuccess = () => ({
  type: INITIALISED_SUCCESS,
});

export const initialisedApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  promise.then(() => dispatch(initialisedSuccess()));
};
