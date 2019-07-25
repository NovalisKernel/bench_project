import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import customAxios from "../../helpers/AxiosRefreshToken";

function LoginForm(props) {
  const {
    classes,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;
  function testClick() {
    const access_token = localStorage.getItem("access_token");
    customAxios({
      method: "POST",
      url: "http://localhost:5000/test",
      headers: {"Authorization": "Bearer " + access_token}
    }).then(
      console.log("TEST_REFRESH")
    )
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="username"
            name="username"
            autoComplete="username"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.username && Boolean(errors.username)}
            helperText={touched.username ? errors.username : ""}
            label="Username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="password"
            name="password"
            autoComplete="password"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password ? errors.password : ""}
            label="Password"
            type="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Button
            onClick={testClick}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Test
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default withStyles(styles)(LoginForm);
