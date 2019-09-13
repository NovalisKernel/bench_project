import { GROUPS_FAILURE, GROUPS_REQUEST, GROUPS_SUCCESS } from "../actions/constants";

const initialState = {
	groups: [],
	isLoading: false
};

export default function groupsReducer(state = initialState, action) {
	switch (action.type) {
		case GROUPS_REQUEST:
			return {
				...state,
				isLoading: true
			};
		case GROUPS_SUCCESS:
			return {
				...state,
				groups: action.groups,
				isLoading: false
			};
		case GROUPS_FAILURE:
			return {
				...state,
				isLoading: false
			};
		default:
			return state;
	}
}