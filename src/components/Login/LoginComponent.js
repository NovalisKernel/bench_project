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
        const user = values;
        props.loginUser(user);
      }}
      render={props => <LoginForm {...props} />}
    />
  );
};

export default LoginComponent;
