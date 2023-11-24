import { Component, OnInit , Input } from '@angular/core';
import { GitHubUser } from '../../models/entities';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUser } from '../../state/selectors/repo.selectors'; 

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userModel$ = this.store.select(selectUser);
  constructor(private store : Store ) { }

  ngOnInit() {
  }

}
