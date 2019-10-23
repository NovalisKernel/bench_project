import {
    COMMANDS_REQUEST,
    COMMANDS_SUCCESS,
    COMMANDS_FAILURE
  } from "../actions/constants";
  
  const initialState = {
    isLoading: false,
    commands: []
  };
  
  export default function commandList(state = initialState, action) {
    switch (action.type) {
      case COMMANDS_REQUEST:
        return {
          isLoading: true,
          commands: []
        };
      case COMMANDS_SUCCESS:
        return {
          isLoading: false,
          commands: action.commands
        };
      case COMMANDS_FAILURE:
        return {
          isLoading: false,
          commands: []
        };
      default:
        return state;
    }
  }
  