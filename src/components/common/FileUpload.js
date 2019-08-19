import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { connect } from "react-redux";
import { alertActions } from "../../actions/alertActions";
import customAxios from "../../helpers/AxiosRefreshToken";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import noAvatar from "../../assets/no-avatar.jpg";

function UploadImage(props) {
  const initialState = {
    file: null,
    error: ""
  };
  const [values, setValues] = React.useState(initialState);
  const { classes } = props;
  const onDropAccepted = useCallback(
    acceptedFiles => {
      if (!acceptedFiles) {
        return;
      }
      let file = acceptedFiles[0];
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
    },
    [props]
  );
  const onDropRejected = useCallback(() => {
    const error = new Error("This type of file is rejected");
    props.alertError(error);
  }, [props]);
  const { getRootProps, getInputProps } = useDropzone({
    onDropAccepted,
    accept: "image/*",
    onDropRejected
  });
  return (
    <div {...getRootProps({ onClick: event => event.stopPropagation() })}>
      <input
        {...getInputProps()}
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
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
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    alertSuccess: () => {
      dispatch(alertActions.success("Image uploaded"));
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
