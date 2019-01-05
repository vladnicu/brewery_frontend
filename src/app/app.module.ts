import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './authenticated/dashboard/dashboard.component';

import { BreweryService } from './authenticated/brewery/brewery.service';
import { BreweryComponent } from './authenticated/brewery/brewery.component';
import { LoaderComponent } from './common/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BreweryComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [BreweryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
