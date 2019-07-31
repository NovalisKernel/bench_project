import {
  EMPLOYEES_REQUEST,
  EMPLOYEES_SUCCESS,
  EMPLOYEES_FAILURE
} from "../actions/constants";

const initialState = {
  isLoading: false,
  employees: []
};

export default function employeesList(state = initialState, action) {
  switch (action.type) {
    case EMPLOYEES_REQUEST:
      return {
        isLoading: true,
        employees: []
      };
    case EMPLOYEES_SUCCESS:
      return {
        isLoading: false,
        employees: action.employees
      };
    case EMPLOYEES_FAILURE:
      return {
        isLoading: false,
        employees: []
      };
    default:
      return state;
  }
}
