import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { HealthComponent } from './dashboard/health/health.component';
import { EnvironmentComponent } from './dashboard/environment/environment.component';
import { IngredientsComponent } from './dashboard/ingredients/ingredients.component';
import { StarsComponent } from './stars/stars.component';
import { CompareComponent } from './compare/compare.component';
import { ComprowComponent } from './compare/comprow/comprow.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    OverviewComponent,
    HealthComponent,
    EnvironmentComponent,
    IngredientsComponent,
    StarsComponent,
    CompareComponent,
    ComprowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
