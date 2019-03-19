import { createSelector } from 'reselect';

const selectRouter = state => state.router;

export const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const selectGlobal = state => state.global;

export const makeSelectIsAuthenticated = () =>
  createSelector(
    selectGlobal,
    state => !!state.token,
  );

export const makeSelectToken = () =>
  createSelector(
    selectGlobal,
    state => state.token,
  );

export const makeSelectUser = () =>
  createSelector(
    selectGlobal,
    state => state.user,
  );

export const makeSelectContent = () =>
  createSelector(
    selectGlobal,
    state => state.content,
  );

export const makeSelectMedia = () =>
  createSelector(
    selectGlobal,
    state => state.media,
  );
