export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUser = state => state.auth.user;
export const getIsRefreshing = state => state.auth.isRefreshing;
export const getContacts = state => state.contacts.contacts;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilter = state => state.filter;
