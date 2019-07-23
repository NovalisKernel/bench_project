import React from "react";
import { Formik } from "formik";
import LoginForm from "./LoginForm";
import LoginValidationSchema from "./LoginValidationSchema";

const LoginComponent = props => {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={LoginValidationSchema}
      onSubmit={values => {
        const {username, password} = values;
        props.loginUser(username, password);
      }}
      render={props => <LoginForm {...props} />}
    />
  );
};

export default LoginComponent;
