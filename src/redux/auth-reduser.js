import { stopSubmit } from "redux-form";
import { AuthAPI, SecurityAPI } from "../api/api";

const SET_USER_DATA = "auth/SET_USER_DATA";
const SET_CAPTCHA_URL_SUCCESS = "auth/SET_CAPTCHA_URL_SUCCESS";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case SET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});
export const setCaptchaUrlSuccess = (captchaUrl) => ({
  type: SET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

export const getAuthUserData = () => async (dispatch) => {
  const response = await AuthAPI.me();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login =
  (email, password, rememberMe = false, captcha = null) =>
  async (dispatch) => {
    const response = await AuthAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      let message =
        response.data.messages.lenght > 0
          ? response.data.messages[0]
          : "some error";
      dispatch(stopSubmit("login", { error: message }));
    }
  };

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await SecurityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;

  dispatch(setCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => async (dispatch) => {
  const response = await AuthAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};
