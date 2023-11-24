import { createAction, props } from '@ngrx/store';
import { GitHubRepository,GitHubUser } from '../../models/entities';


export const loadRepos = createAction('[Repo] Load Repo', props<{ username: string }>());

export const loadReposSuccess = createAction('[Repo] Load Repo Success', props<{ repos: GitHubRepository[] }>());
export const loadReposFailure = createAction('[Repo] Load Repo Failure', props<{ error: any }>());

export const loadGitHubUser = createAction('[GitHub] Load User', props<{ username: string }>());
export const loadGitHubUserSuccess = createAction('[GitHub] Load User Success', props<{ user: GitHubUser }>());
export const loadGitHubUserFailure = createAction('[GitHub] Load User Failure', props<{ error: any }>());
