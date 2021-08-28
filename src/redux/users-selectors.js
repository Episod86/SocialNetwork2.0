import { createSelector } from "reselect";

const getUsers = (state) => {
  // debugger;
  return state.usersPage.users;
};

export const getAllUsers = createSelector(getUsers, (users) => {
  // debugger;
  return users.filter((us) => true);
});

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};
export const getFolowingInProgress = (state) => {
  return state.usersPage.folowingInProgress;
};
