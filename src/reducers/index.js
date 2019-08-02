import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import authReducer from "./AuthReducer";
import alertReducer from "./AlertReducer";
import employeesReducer from "./EmployeesReducer";
import employeeDetailsReducer from "./EmployeeDetailsReducer";
import deleteEmployeeReducer from "./DeleteEmployeeReducer";

export default history =>
  combineReducers({
    authentification: authReducer,
    employeesList: employeesReducer,
    employee: employeeDetailsReducer,
    delete: deleteEmployeeReducer,
    router: connectRouter(history),
    alert: alertReducer
  });
