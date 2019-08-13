import React, { Fragment } from "react";
import { connect } from "react-redux";
import { alertActions } from "../../actions/alertActions";
import customAxios from "../../helpers/AxiosRefreshToken";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

function UploadExcel(props) {
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
    customAxios.post("/cv", data).then(
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
  function handleOpenExcel() {}
  const { classes } = props;
  return (
    <Fragment>
      {props.value ? (
        <Fragment>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            component="span"
            className={classes.button}
          >
            <a
              href={`http://view.officeapps.live.com/op/view.aspx?src=${
                props.value
              }`}
              target="_blank"
            >
              Open excel
            </a>
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            component="span"
            onClick={handleRemoveImage}
            className={classes.button}
          >
            Remove excel
          </Button>
        </Fragment>
      ) : null}
      <input
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        className={classes.input}
        id="excel-button"
        multiple
        type="file"
        filename={props.value}
        onChange={handleFileChange}
      />
      <label htmlFor="excel-button">
        <Button variant="contained" color="primary" fullWidth component="span">
          Upload excel
        </Button>
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

export const ExcelUpload = connect(
  null,
  mapDispatchToProps
)(UploadExcel);
