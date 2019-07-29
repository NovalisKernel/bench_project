import { ALERT_CLEAR, ALERT_ERROR, ALERT_SUCCESS } from "./constants";

export const alertActions = {
  success,
  error,
  clear
};

function success(error) {
  return { type: ALERT_SUCCESS, error };
}

function error(error) {
  return { type: ALERT_ERROR, error };
}

function clear() {
  return { type: ALERT_CLEAR };
}
