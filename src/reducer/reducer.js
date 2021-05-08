const initState = {
	search: [],
	authRefresh: [],
};

export const reducer = (state = initState, action) => {
	if (action.type === "SET_SEARCH") {
		return {
			...state,
			search: action.payload,
		};
	}
	if (action.type === "AUTH_REFRESH") {
		return {
			...state,
			authRefresh: !state.authRefresh,
		};
	}

	return state;
};
