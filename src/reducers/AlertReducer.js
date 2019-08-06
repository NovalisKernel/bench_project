import { ALERT_CLEAR, ALERT_ERROR, ALERT_SUCCESS } from "../actions/constants";

const initialState = {};

export default function alert(state = initialState, action) {
  switch (action.type) {
    case ALERT_SUCCESS:
      return {
        type: "alert-success",
        message: "Success"
      };
    case ALERT_ERROR:
      return {
        type: "alert-danger",
        message: action.error.message
      };
    case ALERT_CLEAR:
      return {};
    default:
      return state;
  }
}
