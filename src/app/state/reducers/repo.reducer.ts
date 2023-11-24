// reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as repoActions from '../actions/repo.actions';
import { GitHubRepository, GitHubUser } from '../../models/entities';

export interface AppState {
  user: GitHubUser | null;
  error: string | null;
  repos: GitHubRepository[];
}

export const initialState: AppState = {
  user: null,
  error: null,
  repos: []
};

export const repoReducer = createReducer(
  initialState,
  on(repoActions.loadReposSuccess, (state, { repos }) => ({ ...state, repos: repos })),
  on(repoActions.loadReposFailure, (state, { error }) => ({ ...state, error })),
  on(repoActions.loadGitHubUserSuccess, (state, { user }) => ({ ...state, user })),
  on(repoActions.loadGitHubUserFailure, (state, { error }) => ({ ...state, error }))
);

