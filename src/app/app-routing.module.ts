import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { canreadGuard} from './guards/canread.guard';
import { AdduserComponent } from './components/adduser/adduser.component';
import { canaddGuard } from './guards/canadd.guard';
import { EditComponent } from './components/edit/edit.component';
import { editGuard } from './guards/edit.guard';
import { VacuumhomeComponent } from './components/vacuumhome/vacuumhome.component';
import { norolesGuard } from './guards/noroles.guard';
import { ErrormsgComponent } from './components/errormsg/errormsg.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [canreadGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "add",
    component: AdduserComponent,
    canActivate: [canaddGuard]
  },
  {
    path: "edit/:email",
    component: EditComponent,
    canActivate: [editGuard]
  },
  {
    path: "vacuumcontrol",
    component: VacuumhomeComponent,
    canActivate: [norolesGuard]
  },
  {
    path: "errors",
    component: ErrormsgComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
