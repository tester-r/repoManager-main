import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectError, selectRepos } from '../../state/selectors/repo.selectors';
import * as repoActions from '../../state/actions/repo.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  error$ = this.store.select(selectError);
  repos$ = this.store.select(selectRepos);
  userForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit() {
    // Subscribe to errors and alert the user
    this.error$.subscribe(error => {
      if (error) {
        alert('An error occurred: ' + error);
        document.getElementById('loadingRepos')!.classList.add('d-none');
      }
    });
    this.repos$.subscribe(data => {
      document.getElementById('loadingRepos')!.classList.add('d-none');
    });
  }

  @Output() search = new EventEmitter<string>();

  onSubmit() {
    const username = this.userForm.get('username')?.value as string;

    if (username.length < 4) {
      alert('User name is required.');
      return;
    }

    // Dispatch load actions
    this.dispatchLoadActions(username);
    document.getElementById('closeModal')!.click();
    document.getElementById('loadingRepos')!.classList.remove('d-none');
  }

  dispatchLoadActions(githubUsername: string) {
    this.store.dispatch(repoActions.loadGitHubUser({ username: githubUsername }));
    this.store.dispatch(repoActions.loadRepos({ username: githubUsername }));
  }
}
