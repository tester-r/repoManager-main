// repo.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { GithubApiService } from '../../services/github-api.service';
import * as repoActions from '../actions/repo.actions';

@Injectable()
export class RepoEffects {

  loadRepos$ = createEffect(() => this.actions$.pipe(
    ofType(repoActions.loadRepos),
    mergeMap((action) => this.githubApiService.getRepositories(action.username)
      .pipe(
        map(repos => repoActions.loadReposSuccess({ repos })),
        catchError(error => of(repoActions.loadReposFailure({ error: 'Failed to load repos. Invalid username or no internet' })))
      ))
    )
  );
  loadGitHubUser$ = createEffect(() =>
  this.actions$.pipe(
    ofType(repoActions.loadGitHubUser),
    mergeMap(action =>
      this.githubApiService.getUser(action.username).pipe(
        map(user => repoActions.loadGitHubUserSuccess({ user })),
        catchError(error => of(repoActions.loadGitHubUserFailure({ error: 'Invalid username or no internet.' })))
      )
    )
  )
);

  constructor(
    private actions$: Actions,
    private githubApiService: GithubApiService
  ) {}
}
