import { CanActivateFn } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


export const norolesGuard: CanActivateFn = (route, state) => {
  const helper = new JwtHelperService()
  if (localStorage.getItem('JWT') != null) {
    // @ts-ignore
    const roles = helper.decodeToken(localStorage.getItem("JWT"));
    if(roles.roles.length > 0){
      return true;
    }
  }
  alert("Nemate ni jednu dozvolu.");
  return false;
};
