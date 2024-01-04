import { CanActivateFn } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

export const addvacuumGuard: CanActivateFn = (route, state) => {
  const helper = new JwtHelperService()
  if (localStorage.getItem('JWT') != null) {
    // @ts-ignore
    const roles = helper.decodeToken(localStorage.getItem("JWT"));
    if(roles.roles.indexOf('vacuum_add') > -1){
      return true;
    }
  }
  alert("Nemate dozvolu za dodavanje novih usisivaca.");
  return false;
};
