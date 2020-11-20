import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';


const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

];

// metadata initializes the router and starts listening for browser location changes
@NgModule({
  // forRoot() method because you configure the router at the application's root level.
  // forRoot() method supplies the service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
