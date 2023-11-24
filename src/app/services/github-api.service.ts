import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GitHubRepository, GitHubUser } from '../models/entities';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  private apiUrl = 'https://api.github.com/users/';
  private headers = new HttpHeaders({
    'Authorization': `token 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`
  });

  constructor(private http: HttpClient) { }

  getRepositories(username: string): Observable<GitHubRepository[]> {
    console.log("Loading repos for user : " + username);
    return this.http.get<GitHubRepository[]>(`${this.apiUrl}${username}/repos`, { headers: this.headers } );
  }
  getUser(username:string) : Observable<GitHubUser> {
     console.log("Loading git hub user : " + username);
     return this.http.get<GitHubUser>(`${this.apiUrl}${username}`, { headers: this.headers });
  }
}
