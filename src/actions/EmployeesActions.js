import {
  EMPLOYEES_REQUEST,
  EMPLOYEES_SUCCESS,
  EMPLOYEES_FAILURE,
  EMPLOYEE_DETAILS_REQUEST,
  EMPLOYEE_DETAILS_SUCCESS,
  EMPLOYEE_DETAILS_FAILURE
} from "./constants";
import customAxios from "../helpers/AxiosRefreshToken";
import { tokenHelper } from "../helpers/TokenHelper";
import setAuthHeader from "../helpers/AuthHeader";
import { alertActions } from "./alertActions";

export const getEmployees = () => async dispatch => {
  dispatch(request());
  try {
    const token = tokenHelper.getAuthToken();
    setAuthHeader(customAxios, token);
    const response = await customAxios.get("/employees");
    const { content: employees } = response.data;
    dispatch(success(employees));
  } catch (error) {
    dispatch(failure(error));
    dispatch(alertActions.error(error));
  }

  function request() {
    return { type: EMPLOYEES_REQUEST };
  }
  function success(employees) {
    return { type: EMPLOYEES_SUCCESS, employees };
  }
  function failure(error) {
    return { type: EMPLOYEES_FAILURE, error };
  }
};

export const getEmployeeDetails = id => async dispatch => {
  dispatch(request());
  try {
    const token = tokenHelper.getAuthToken();
    setAuthHeader(customAxios, token);
    const response = await customAxios.get(`/employees/${id}`);
    const employeeDetails = response.data;
    dispatch(success(employeeDetails));
  } catch (error) {
    dispatch(failure(error));
    dispatch(alertActions.error(error));
  }
  function request() {
    return { type: EMPLOYEE_DETAILS_REQUEST };
  }
  function success(employees) {
    return { type: EMPLOYEE_DETAILS_SUCCESS, employees };
  }
  function failure(error) {
    return { type: EMPLOYEE_DETAILS_FAILURE, error };
  }
};
