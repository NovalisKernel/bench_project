import {
  SKILLS_REQUEST,
  SKILLS_SUCCESS,
  SKILLS_FAILURE
} from "../actions/constants";

const initialState = {
  skills: [],
  isLoading: false
};

export default function skillReducer(state = initialState, action) {
  switch (action.type) {
    case SKILLS_REQUEST:
      return {
        skills: [],
        isLoading: true
      };
    case SKILLS_SUCCESS:
      return {
        skills: action.skills,
        isLoading: false
      };
    case SKILLS_FAILURE:
      return {
        skills: [],
        isLoading: false
      };
    default:
      return initialState;
  }
}
