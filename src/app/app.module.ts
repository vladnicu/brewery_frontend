import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './authenticated/dashboard/dashboard.component';

import { BreweryService } from './authenticated/brewery/brewery.service';
import { BreweryComponent } from './authenticated/brewery/brewery.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BreweryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule
  ],
  providers: [BreweryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
