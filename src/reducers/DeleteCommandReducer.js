import {
  COMMAND_DELETE_REQUEST,
  COMMAND_DELETE_SUCCESS,
  COMMAND_DELETE_FAILURE
} from "../actions/constants";

export default function deleteCommandReducer(state = {}, action) {
  switch (action.type) {
    case COMMAND_DELETE_REQUEST:
      return {};
    case COMMAND_DELETE_SUCCESS:
      return {};
    case COMMAND_DELETE_FAILURE:
      return {};
    default:
      return {};
  }
}
