import {
  TECH_SKILLS_REQUEST,
  TECH_SKILLS_SUCCESS,
  TECH_SKILLS_FAILURE,
  SOFT_SKILLS_REQUEST,
  SOFT_SKILLS_SUCCESS,
  SOFT_SKILLS_FAILURE
} from "./constants";
import customAxios from "../helpers/AxiosRefreshToken";
import { tokenHelper } from "../helpers/TokenHelper";
import setAuthHeader from "../helpers/AuthHeader";
import { alertActions } from "./alertActions";

export const getTechSkills = () => async dispatch => {
  dispatch(request());
  try {
    const token = tokenHelper.getAuthToken();
    setAuthHeader(customAxios, token);
    const response = await customAxios.get("/skills/technical");
    const techSkills = response.data;
    dispatch(success(techSkills));
  } catch (error) {
    dispatch(failure());
    dispatch(alertActions.error(error));
  }
  function request() {
    return { type: TECH_SKILLS_REQUEST };
  }
  function success(techSkills) {
    return { type: TECH_SKILLS_SUCCESS, techSkills };
  }
  function failure() {
    return { type: TECH_SKILLS_FAILURE };
  }
};

export const getSoftSkills = () => async dispatch => {
  dispatch(request());
  try {
    const token = tokenHelper.getAuthToken();
    setAuthHeader(customAxios, token);
    const response = await customAxios.get("/skills/soft");
    const softSkills = response.data;
    dispatch(success(softSkills));
  } catch (error) {
    dispatch(failure());
    dispatch(alertActions.error(error));
  }
  function request() {
    return { type: SOFT_SKILLS_REQUEST };
  }
  function success(softSkills) {
    return { type: SOFT_SKILLS_SUCCESS, softSkills };
  }
  function failure() {
    return { type: SOFT_SKILLS_FAILURE };
  }
};
