import {
  EMPLOYEE_DETAILS_REQUEST,
  EMPLOYEE_DETAILS_SUCCESS,
  EMPLOYEE_DETAILS_FAILURE
} from "../actions/constants";

const initialState = {
  employee: {},
  isLoading: false
};

export default function employeeDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case EMPLOYEE_DETAILS_REQUEST:
      return {
        employee: {},
        isLoading: true
      };
    case EMPLOYEE_DETAILS_SUCCESS:
      return {
        employee: action.employeeDetails,
        isLoading: false
      };
    case EMPLOYEE_DETAILS_FAILURE:
      return {
        employee: {},
        isLoading: false
      };
    default:
      return state;
  }
}
