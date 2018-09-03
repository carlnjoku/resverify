import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LoginComponent } from './login/login.component';
import { ResultManagerComponent } from './result-manager/result-manager.component';
import { NewApplicantComponent } from './new-applicant/new-applicant.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ApplicantComponent,
    FooterComponent,
    SidebarComponent,
    AdminLoginComponent,
    LoginComponent,
    ResultManagerComponent,
    NewApplicantComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'dashboard', component: DashboardComponent},
      {path: 'applicant', component: ApplicantComponent},
      {path: 'login', component: LoginComponent},
      {path: 'admin-login', component: AdminLoginComponent},
      {path: 'result-manager', component: ResultManagerComponent},
      {path: 'new-applicant', component: NewApplicantComponent}

    ])
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
