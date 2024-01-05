import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
//import { AdduserComponent } from './components/adduser/adduser.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { RolePipe } from './pipes/role.pipe'
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './components/edit/edit.component';
import { VacuumhomeComponent } from './components/vacuumhome/vacuumhome.component';
import { ErrormsgComponent } from './components/errormsg/errormsg.component';
import { AddvacuumComponent } from './components/addvacuum/addvacuum.component';
import { SearchvacuumComponent } from './components/searchvacuum/searchvacuum.component';
import { searchGuard } from './guards/search.guard';
@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    AppComponent,
    AdduserComponent,
    RolePipe,
    EditComponent,
    VacuumhomeComponent,
    ErrormsgComponent,
    AddvacuumComponent,
    SearchvacuumComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
