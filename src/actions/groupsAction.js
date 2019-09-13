import setAuthHeader from "../helpers/AuthHeader";
import customAxios from "../helpers/AxiosRefreshToken";
import { tokenHelper } from "../helpers/TokenHelper";
import { alertActions } from "./alertActions";
import { GROUPS_REQUEST, GROUPS_SUCCESS, GROUPS_FAILURE } from "./constants";


export const getGroups = () => async dispatch => {
    try {
        dispatch(request());
        const token = tokenHelper.getAuthToken();
        setAuthHeader(customAxios, token);
		const response = await customAxios.get("/groups");
        const groups = response.data;
        dispatch(success(groups));
    } catch (error) {
			dispatch(failure());
			dispatch(alertActions.error(error));
		}
    function request() {
			return {
				type: GROUPS_REQUEST
			};
		}
		function success(groups) {
			return {
				type: GROUPS_SUCCESS, groups
			};
		}
		function failure() {
			return {
				type: GROUPS_FAILURE
			}			
		};
}