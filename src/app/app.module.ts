import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SearchPipe } from './pipes/search';
import { FormsModule } from'@angular/forms';
import { UserService } from './services/user.service';
import { RegisterService } from './services/register.service';
import { EditComponent } from './edit/edit.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmpoyeeListComponent } from './employees/empoyee-list/empoyee-list.component';


const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent}, 
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent },
  {path: 'edit', component: EditComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'employee', component: EmpoyeeListComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    MenuComponent,
    SearchPipe,
    EditComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmpoyeeListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [UserService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
