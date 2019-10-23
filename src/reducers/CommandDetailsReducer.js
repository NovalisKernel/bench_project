import {
  COMMAND_DETAILS_REQUEST,
  COMMAND_DETAILS_SUCCESS,
  COMMAND_DETAILS_FAILURE
} from "../actions/constants";

const initialState = {
  command: {},
  isLoading: false
};

export default function commandDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case COMMAND_DETAILS_REQUEST:
      return {
        command: {},
        isLoading: true
      };
    case COMMAND_DETAILS_SUCCESS:
      return {
        command: action.commandDetails,
        isLoading: false
      };
    case COMMAND_DETAILS_FAILURE:
      return {
        command: {},
        isLoading: false
      };
    default:
      return state;
  }
}
