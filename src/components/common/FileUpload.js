import React, { Fragment } from "react";
import { connect } from "react-redux";
import { alertActions } from "../../actions/alertActions";
import customAxios from "../../helpers/AxiosRefreshToken";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import noAvatar from "../../assets/no-avatar.jpg";

function UploadImage(props) {
  const initialState = {
    file: null,
    error: ""
  };
  const [values, setValues] = React.useState(initialState);
  function handleFileChange(event) {
    if (!event.target.files) {
      return;
    }
    let file = event.target.files[0];
    event.target.value = "";
    setValues(oldValues => ({
      ...oldValues,
      file: file
    }));
    let data = new FormData();
    data.append("file", file);
    setValues(oldValues => ({
      ...oldValues,
      error: undefined
    }));
    customAxios.post("/images", data).then(
      res => {
        setValues(oldValues => ({
          ...oldValues,
          error: undefined
        }));
        props.onChange(props.id, res.data);
        props.alertSuccess();
      },
      err => {
        props.alertError(err);
      }
    );
  }
  function handleRemoveImage() {
    props.onChange(props.id, "");
  }
  const { classes } = props;
  return (
    <Fragment>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        filename={props.value}
        onChange={handleFileChange}
      />
      <label htmlFor="contained-button-file">
        <IconButton component="span">
          <Avatar
            src={props.value !== "" ? props.value : noAvatar}
            style={{
              margin: "10px",
              width: "100px",
              height: "100px"
            }}
          />
        </IconButton>
      </label>
    </Fragment>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    alertSuccess: () => {
      dispatch(alertActions.success());
    },
    alertError: err => {
      dispatch(alertActions.error(err));
    }
  };
};

export const ImageUpload = connect(
  null,
  mapDispatchToProps
)(UploadImage);
