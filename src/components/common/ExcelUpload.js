import React, { Fragment, useCallback } from "react";
import { connect } from "react-redux";
import { alertActions } from "../../actions/alertActions";
import customAxios from "../../helpers/AxiosRefreshToken";
import Button from "@material-ui/core/Button";
import { tokenHelper } from "../../helpers/TokenHelper";
import { useDropzone } from "react-dropzone";
import axios from "axios";

function UploadExcel(props) {
  const initialState = {
    file: null,
    error: ""
  };
  const [values, setValues] = React.useState(initialState);
  function downloadExcel() {
    const token = tokenHelper.getAuthToken();
    axios
      .get(props.value, {
        headers: { Authorization: "Bearer " + token },
      })
      .then(
        response => {          
          var filename = response.data.filename;          
          axios.get(response.data._links.content.href, {
            headers: { Authorization: "Bearer " + token },
            responseType: "arraybuffer"
          }).then(response => {
            props.alertSuccess();
            var file = new Blob([response.data]);
            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
              window.navigator.msSaveOrOpenBlob(file, filename);
            } else {
              var url = window.URL.createObjectURL(file);
              var a = document.createElement("a");
              document.body.appendChild(a);
              a.href = url;
              a.target = "_blank";
              a.download = filename;
              a.click();
              window.URL.revokeObjectURL(url);
              document.body.removeChild(a);
            }
          },
          error => {
            props.alertError(error);
          }); 
        }
      );
  }
  const { classes, role, employee } = props;
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
    },
    [props]
  );
  const onDropRejected = useCallback(() => {
    const error = new Error("This type of file is rejected");
    props.alertError(error);
  }, [props]);
  const { getRootProps, getInputProps } = useDropzone({
    onDropAccepted,
    onDropRejected
  });
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
          Download CV
        </Button>
      ) : employee && employee.cvUrl ? (
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={downloadExcel}
          className={classes.button}
        >
          Download CV
        </Button>
      ) : null}
      {role !== "Sale Manager " ? (
        <div
          {...getRootProps({
            className: classes.dropzone
          })}
        >
          <input
            {...getInputProps()}
            className={classes.input}
            id="excel-button"
            multiple
            type="file"
          />
          <p>Upload CV</p>
        </div>
      ) : null}
    </Fragment>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    alertSuccess: () => {
      dispatch(alertActions.success("Excel uploaded"));
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
