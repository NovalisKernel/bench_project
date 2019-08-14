import React, { Fragment } from "react";
import { connect } from "react-redux";
import { alertActions } from "../../actions/alertActions";
import customAxios from "../../helpers/AxiosRefreshToken";
import Button from "@material-ui/core/Button";
import { tokenHelper } from "../../helpers/TokenHelper";
import setAuthHeader from "../../helpers/AuthHeader";
import axios from "axios";

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
  function downloadExcel() {
    const token = tokenHelper.getAuthToken();
    axios
      .get(props.value, {
        headers: { Authorization: "Bearer " + token },
        responseType: "arraybuffer"
      })
      .then(
        response => {
          props.alertSuccess();
          var file = new Blob([response.data]);
          if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            // If IE, you must uses a different method.
            window.navigator.msSaveOrOpenBlob(file, "out.xlsx");
          } else {
            var url = window.URL.createObjectURL(file);
            var a = document.createElement("a");
            document.body.appendChild(a);
            a.href = url;
            a.target = "_blank";
            a.download = "CV.xlsx";
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
          }
        },
        error => {
          props.alertError(error);
        }
      );
  }
  const { classes, role, employee } = props;
  return (
    <Fragment>
      {props.value ? (
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={downloadExcel}
          className={classes.button}
        >
          Download excel
        </Button>
      ) : employee && employee.cvUrl ? (
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={downloadExcel}
          className={classes.button}
        >
          Download excel
        </Button>
      ) : null}
      {role !== "Sale" ? (
        <Fragment>
          <input
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            className={classes.input}
            id="excel-button"
            multiple
            type="file"
            onChange={handleFileChange}
          />
          <label htmlFor="excel-button">
            <Button
              variant="contained"
              color="primary"
              fullWidth
              component="span"
              className={classes.button}
            >
              Upload excel
            </Button>
          </label>
        </Fragment>
      ) : null}
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
