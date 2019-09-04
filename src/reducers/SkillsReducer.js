import {
  TECH_SKILLS_REQUEST,
  TECH_SKILLS_SUCCESS,
  TECH_SKILLS_FAILURE,
  SOFT_SKILLS_REQUEST,
  SOFT_SKILLS_SUCCESS,
  SOFT_SKILLS_FAILURE
} from "../actions/constants";

const initialState = {
  technicalSkills: [],
  softSkills: [],
  isLoading: false
};

export default function skillReducer(state = initialState, action) {
  switch (action.type) {
    case TECH_SKILLS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case TECH_SKILLS_SUCCESS:
      return {
        ...state,
        technicalSkills: action.techSkills,
        isLoading: false
      };
    case TECH_SKILLS_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case SOFT_SKILLS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case SOFT_SKILLS_SUCCESS:
      return {
        ...state,
        softSkills: action.softSkills,
        isLoading: false
      };
    case SOFT_SKILLS_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
