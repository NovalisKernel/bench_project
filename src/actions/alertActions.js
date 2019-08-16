import { ALERT_CLEAR, ALERT_ERROR, ALERT_SUCCESS } from "./constants";

export const alertActions = {
  success,
  error,
  clear
};

function success(message) {
  return { type: ALERT_SUCCESS, message };
}

function error(error) {
  return { type: ALERT_ERROR, error };
}

function clear() {
  return { type: ALERT_CLEAR };
}
