import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocktailDetailsComponent } from './modules/feature/cocktail-details/cocktail-details.component';
import { SearchComponent } from './modules/feature/search/search.component';
import { PagenotfoundComponent } from './modules/shared/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'home', component: CocktailDetailsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
