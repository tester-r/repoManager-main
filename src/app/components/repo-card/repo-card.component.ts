import { Component, OnInit, Input } from '@angular/core';
import { GitHubRepository } from '../../models/entities';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css']
})
export class RepoCardComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }

  @Input() repoModel!: GitHubRepository;
  languages: LangInfo[] = [];

  ngOnInit() {   
      // Replace 'YOUR_GITHUB_TOKEN' with your GitHub token if needed
      const url = `https://api.github.com/repos/${this.repoModel.owner.login}/${this.repoModel.name}/languages`;
      
      this.httpClient.get<LanguageData>(url).subscribe(data => {
        const totalBytes: number = Object.values(data).reduce((acc, val) => acc + val, 0);
      
        this.languages = Object.entries(data).map(([language, bytes]) => {
          return {
            language,
            percentage: (bytes / totalBytes) * 100
          };
        });
          // Sort the languages array by percentage
        this.languages.sort((a, b) => b.percentage - a.percentage);
      });      
    
  }
  
}

export interface LangInfo {
  language: string;
  percentage: number;
}
interface LanguageData {
  [key: string]: number;
}
