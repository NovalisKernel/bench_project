import {
  EMPLOYEES_REQUEST,
  EMPLOYEES_SUCCESS,
  EMPLOYEES_FAILURE,
  EMPLOYEE_DETAILS_REQUEST,
  EMPLOYEE_DETAILS_SUCCESS,
  EMPLOYEE_DETAILS_FAILURE,
  EMPLOYEE_DELETE_REQUEST,
  EMPLOYEE_DELETE_SUCCESS,
  EMPLOYEE_DELETE_FAILURE,
  EMPLOYEE_ADD_REQUEST,
  EMPLOYEE_ADD_SUCCESS,
  EMPLOYEE_ADD_FAILURE,
  EMPLOYEE_EDIT_REQUEST,
  EMPLOYEE_EDIT_SUCCESS,
  EMPLOYEE_EDIT_FAILURE,
  SKILLS_REQUEST,
  SKILLS_SUCCESS,
  COPY_EMPLOYEE,
  CLEAR_COPY_EMPLOYEE,
  SKILLS_FAILURE
} from "./constants";
import customAxios from "../helpers/AxiosRefreshToken";
import { tokenHelper } from "../helpers/TokenHelper";
import setAuthHeader from "../helpers/AuthHeader";
import { push } from "connected-react-router";
import { alertActions } from "./alertActions";

export const getEmployees = query => async dispatch => {
  dispatch(request());
  dispatch(skillRequest());
  try {
    const token = tokenHelper.getAuthToken();
    setAuthHeader(customAxios, token);
    const response = await customAxios.get(`/employees${query}`);
    const responseSkills = await customAxios.get("/skills");
    const skills = responseSkills.data;
    const { content: employees } = response.data;
    dispatch(success(employees));
    dispatch(skillSuccess(skills));
  } catch (error) {
    if (error.message === "Request failed with status code 403") {
      error.message = "You are not permitted for this";
    }
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
  function skillRequest() {
    return { type: SKILLS_REQUEST };
  }
  function skillSuccess(skills) {
    return { type: SKILLS_SUCCESS, skills };
  }
};

export const getEmployeeDetails = id => async dispatch => {
  dispatch(request());
  dispatch(skillRequest());
  try {
    const token = tokenHelper.getAuthToken();
    setAuthHeader(customAxios, token);
    const response = await customAxios.get(`/employees/${id}`);
    const responseSkills = await customAxios.get("/skills");
    const employeeDetails = response.data;
    const skills = responseSkills.data;
    dispatch(success(employeeDetails));
    dispatch(skillSuccess(skills));
  } catch (error) {
    if (error.message === "Request failed with status code 403") {
      error.message = "You are not permitted for this";
    }
    dispatch(failure(error));
    dispatch(alertActions.error(error));
  }
  function request() {
    return { type: EMPLOYEE_DETAILS_REQUEST };
  }
  function success(employeeDetails) {
    return { type: EMPLOYEE_DETAILS_SUCCESS, employeeDetails };
  }
  function failure(error) {
    return { type: EMPLOYEE_DETAILS_FAILURE, error };
  }
  function skillRequest() {
    return { type: SKILLS_REQUEST };
  }
  function skillSuccess(skills) {
    return { type: SKILLS_SUCCESS, skills };
  }
};

export const deleteEmployee = id => async dispatch => {
  dispatch(request());
  try {
    const token = tokenHelper.getAuthToken();
    setAuthHeader(customAxios, token);
    const response = await customAxios.delete(`/employees/${id}`);
    dispatch(success());
    dispatch(push("/"));
    dispatch(alertActions.success("User successfully deleted"));
  } catch (error) {
    if (error.message === "Request failed with status code 403") {
      error.message = "You are not permitted for this";
    }
    dispatch(failure(error));
    dispatch(alertActions.error(error));
  }
  function request() {
    return { type: EMPLOYEE_DELETE_REQUEST };
  }
  function success() {
    return { type: EMPLOYEE_DELETE_SUCCESS };
  }
  function failure(error) {
    return { type: EMPLOYEE_DELETE_FAILURE };
  }
};

export const addEmployee = values => async dispatch => {
  dispatch(request());
  try {
    const token = tokenHelper.getAuthToken();
    setAuthHeader(customAxios, token);
    const response = await customAxios.post("/employees", values);
    dispatch(success());
    dispatch(push("/"));
    dispatch(alertActions.success("User added"));
  } catch (error) {
    dispatch(failure(error));
    dispatch(alertActions.error(error));
  }
  function request() {
    return { type: EMPLOYEE_ADD_REQUEST };
  }
  function success() {
    return { type: EMPLOYEE_ADD_SUCCESS };
  }
  function failure(error) {
    return { type: EMPLOYEE_ADD_FAILURE };
  }
};

export const editEmployee = (id, values) => async dispatch => {
  dispatch(request());
  try {
    const token = tokenHelper.getAuthToken();
    setAuthHeader(customAxios, token);
    const response = await customAxios.put(`/employees/${id}`, values);
    dispatch(success());
    dispatch(push("/"));
    dispatch(alertActions.success("User successfully edited"));
  } catch (error) {
    if (error.message === "Request failed with status code 403") {
      error.message = "You are not permitted for this";
    }
    dispatch(failure(error));
    dispatch(alertActions.error(error));
  }
  function request() {
    return { type: EMPLOYEE_EDIT_REQUEST };
  }
  function success() {
    return { type: EMPLOYEE_EDIT_SUCCESS };
  }
  function failure(error) {
    return { type: EMPLOYEE_EDIT_FAILURE };
  }
};

export const copyEmployee = values => async dispatch => {
  dispatch(copy(values));
  await dispatch(push("/new-employee"));
  dispatch(clear());
  function copy(values) {
    return { type: COPY_EMPLOYEE, values };
  }
  function clear() {
    return { type: CLEAR_COPY_EMPLOYEE };
  }
};

export const getSkills = () => async dispatch => {
  dispatch(request());
  try {
    const token = tokenHelper.getAuthToken();
    setAuthHeader(customAxios, token);
    const responseSkills = await customAxios.get("/skills");
    const skills = responseSkills.data;
    dispatch(success(skills));
  } catch(error) {
    dispatch(failure(error));
    dispatch(alertActions.error(error))
  }

  function request() {
    return { type: SKILLS_REQUEST };
  }
  function success(skills) {
    return { type: SKILLS_SUCCESS, skills };
  }
  function failure(error) {
    return { type: SKILLS_FAILURE };
  }
};
