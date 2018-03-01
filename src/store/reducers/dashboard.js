import { RECEIVE_UPLOADS } from '../actions/dashboard'
export function uploadsReducer(state = {}, action) {
	if (action.type === RECEIVE_UPLOADS) {
		return {
			...state,
			uploads: action.payload
		}
	}
	return state;
}