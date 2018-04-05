import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { HealthComponent } from './dashboard/health/health.component';
import { EnvironmentComponent } from './dashboard/environment/environment.component';
import { IngredientsComponent } from './dashboard/ingredients/ingredients.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'health', component: HealthComponent },
      { path: 'environment', component: EnvironmentComponent },
      { path: 'ingredients', component: IngredientsComponent },
    ]
  },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
