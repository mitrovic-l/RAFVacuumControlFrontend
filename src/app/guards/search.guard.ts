import { CanActivateFn } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

export const searchGuard: CanActivateFn = (route, state) => {
  const helper = new JwtHelperService()
  if (localStorage.getItem('JWT') != null) {
    // @ts-ignore
    const roles = helper.decodeToken(localStorage.getItem("JWT"));
    if(roles.roles.indexOf('vacuum_search') > -1){
      return true;
    }
  }
  alert("Nemate dozvolu za pretragu usisivaca.");
  return false;
};
