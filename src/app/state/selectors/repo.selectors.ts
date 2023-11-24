// selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../reducers/repo.reducer'; 

// Select the feature state (the state managed by this reducer)
export const selectGitHubState = createFeatureSelector<AppState>('github');

// Selectors for specific pieces of state
export const selectUser = createSelector(selectGitHubState, (state) => state.user);
export const selectError = createSelector(selectGitHubState, (state) => state.error);
export const selectRepos = createSelector(selectGitHubState, (state) => state.repos);
