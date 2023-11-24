import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { HomeComponent } from './pages/home/home.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RepoEffects } from './state/effects/repo.effects'; 
import { repoReducer } from './state/reducers/repo.reducer';
import { HttpClientModule } from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { ReactiveFormsModule  } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SidebarComponent,
    RepoCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatChipsModule,
    MatFormFieldModule,
    CommonModule,
    ReactiveFormsModule ,
    StoreModule.forRoot({ github: repoReducer }),
    EffectsModule.forRoot([RepoEffects]),
    BrowserAnimationsModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
