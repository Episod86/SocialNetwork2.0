import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { reduxForm } from "redux-form";
import { createField, Input } from "../Commosn/FormsControl/FormsControl";
import { required } from "../../utils/Validators";

import { login, logout } from "../../redux/auth-reduser";

import style from "../Commosn/FormsControl/FormsControl.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", Input, [required])}
      {createField("Password", "password", Input, [required], {
        type: "password",
      })}
      {createField(
        null,
        "rememberMe",
        Input,
        [],
        { type: "checkbox" },
        "rememberMe"
      )}
      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl &&
        createField("Symbol from image", "captcha", Input, [required])}

      {error && <div className={style.formSummaryError}>{error}</div>}
      <div>
        <button>Отправить</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };
  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});
export default connect(mapStateToProps, { login, logout })(Login);
