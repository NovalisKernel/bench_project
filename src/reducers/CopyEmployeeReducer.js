import { COPY_EMPLOYEE, CLEAR_COPY_EMPLOYEE } from "../actions/constants";

const initialState = {
  employee: {},
  isCopy: false
};

export default function copyEmployee(state = initialState, action) {
  switch (action.type) {
    case COPY_EMPLOYEE:
      return {
        employee: action.values,
        isCopy: true
      };
    case CLEAR_COPY_EMPLOYEE:
      return {
        employee: {},
        isCopy: false
      };
    default:
      return state;
  }
}
