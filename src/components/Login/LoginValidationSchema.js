import { string, object } from "yup";

const LoginValidationSchema = object().shape({
  username: string().required("Enter username"),
  password: string().required("Enter your password")
});

export default LoginValidationSchema;
