import {
  EMPLOYEE_DELETE_REQUEST,
  EMPLOYEE_DELETE_SUCCESS,
  EMPLOYEE_DELETE_FAILURE
} from "../actions/constants";

export default function deleteEmployeeReducer(state = {}, action) {
  switch (action.type) {
    case EMPLOYEE_DELETE_REQUEST:
      return {};
    case EMPLOYEE_DELETE_SUCCESS:
      return {};
    case EMPLOYEE_DELETE_FAILURE:
      return {};
    default:
      return {};
  }
}
