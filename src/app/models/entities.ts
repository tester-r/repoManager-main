
export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  open_issues_count : number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  owner : GitHubUser;
}
export interface GitHubUser {
  id: number;
  login: string;
  name: string;
  email: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  created_at: string;
  updated_at: string;
  avatar_url: string; 
}