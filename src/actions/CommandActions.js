import {
    COMMANDS_REQUEST,
    COMMANDS_SUCCESS,
    COMMANDS_FAILURE,
    COMMAND_DETAILS_REQUEST,
    COMMAND_DETAILS_SUCCESS,
    COMMAND_DETAILS_FAILURE,
    COMMAND_DELETE_REQUEST,
    COMMAND_DELETE_SUCCESS,
    COMMAND_DELETE_FAILURE,
    COMMAND_ADD_REQUEST,
    COMMAND_ADD_SUCCESS,
    COMMAND_ADD_FAILURE,
    COMMAND_EDIT_REQUEST,
    COMMAND_EDIT_SUCCESS,
    COMMAND_EDIT_FAILURE,
} from "./constants";

import customAxios from "../helpers/AxiosRefreshToken";
import { tokenHelper } from "../helpers/TokenHelper";
import setAuthHeader from "../helpers/AuthHeader";
import { push } from "connected-react-router";
import { alertActions } from "./alertActions";

export const getCommands = () => async dispatch => {
    dispatch(request());
    try {
        const token = tokenHelper.getAuthToken();
        setAuthHeader(customAxios, token);
        const response = await customAxios.get("/commands");
        const commands = response.data;
        dispatch(success(commands));
    } catch (error) {
        if (error.message === "Request failed with status code 403") {
            error.message = "You are not permitted for this";
        }
        dispatch(failure(error));
        dispatch(alertActions.error(error));
    }

    function request() {
        return { type: COMMANDS_REQUEST };
    }
    function success(commands) {
        return { type: COMMANDS_SUCCESS, commands };
    }
    function failure(error) {
        return { type: COMMANDS_FAILURE, error };
    }
};

export const getCommandDetails = id => async dispatch => {
    dispatch(request());
    try {
        const token = tokenHelper.getAuthToken();
        setAuthHeader(customAxios, token);
        const response = await customAxios.get(`/commands/${id}`);
        const command = response.data;
        dispatch(success(command));
    } catch (error) {
        if (error.message === "Request failed with status code 403") {
            error.message = "You are not permitted for this";
        }
        dispatch(failure(error));
        dispatch(alertActions.error(error));
    }
    function request() {
        return { type: COMMAND_DETAILS_REQUEST };
    }
    function success(command) {
        return { type: COMMAND_DETAILS_SUCCESS, command };
    }
    function failure(error) {
        return { type: COMMAND_DETAILS_FAILURE, error };
    }
};

export const deleteCommand = id => async dispatch => {
    dispatch(request());
    try {
        const token = tokenHelper.getAuthToken();
        setAuthHeader(customAxios, token);
        await customAxios.delete(`/commands/${id}`);
        dispatch(success());
        dispatch(push("/"));
        dispatch(alertActions.success("Command successfully deleted"));
    } catch (error) {
        if (error.message === "Request failed with status code 403") {
            error.message = "You are not permitted for this";
        }
        dispatch(failure(error));
        dispatch(alertActions.error(error));
    }
    function request() {
        return { type: COMMAND_DELETE_REQUEST };
    }
    function success() {
        return { type: COMMAND_DELETE_SUCCESS };
    }
    function failure(error) {
        return { type: COMMAND_DELETE_FAILURE };
    }
};

export const addCommand = values => async dispatch => {
    dispatch(request());
    try {
        const token = tokenHelper.getAuthToken();
        setAuthHeader(customAxios, token);
        await customAxios.post("/commands", values);
        dispatch(success());
        dispatch(push("/"));
        dispatch(alertActions.success("Command added"));
    } catch (error) {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
    }
    function request() {
        return { type: COMMAND_ADD_REQUEST };
    }
    function success() {
        return { type: COMMAND_ADD_SUCCESS };
    }
    function failure(error) {
        return { type: COMMAND_ADD_FAILURE };
    }
};

export const editCommand = (id, values) => async dispatch => {
    dispatch(request());
    try {
        const token = tokenHelper.getAuthToken();
        setAuthHeader(customAxios, token);
        await customAxios.put(`/commands/${id}`, values);
        dispatch(success());
        dispatch(push("/"));
        dispatch(alertActions.success("Command successfully edited"));
    } catch (error) {
        if (error.message === "Request failed with status code 403") {
            error.message = "You are not permitted for this";
        }
        dispatch(failure(error));
        dispatch(alertActions.error(error));
    }
    function request() {
        return { type: COMMAND_EDIT_REQUEST };
    }
    function success() {
        return { type: COMMAND_EDIT_SUCCESS };
    }
    function failure(error) {
        return { type: COMMAND_EDIT_FAILURE };
    }
};