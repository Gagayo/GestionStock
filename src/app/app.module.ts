import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ChartModule} from 'angular2-chartjs';

import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//Import Service
import { ProduitService } from '../services/produit.service';
import { CategoryComponent } from './category/category.component';
import { AuthenticationService } from '../services/auth.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { XhrInterceptor } from './xhr.interceptor';
import { CookieService } from 'ngx-cookie-service';
import { MyChartComponent } from './my-chart/my-chart.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    SidebarComponent,
    ContentComponent,
    NavbarComponent,
    DashboardComponent,
    CategoryComponent,
    LoginComponent,
    HomeComponent,
    MyChartComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [ 
    ProduitService, 
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
