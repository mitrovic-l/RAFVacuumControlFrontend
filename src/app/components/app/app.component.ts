import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showLogout = true;
  constructor(private router: Router){

    console.log(this.router.url)
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
      //@ts-ignore
    ).subscribe((event: NavigationEnd) => {
      // Ako je trenutna ruta '/login', sakrij navbar
      this.showLogout = event.urlAfterRedirects !== '/login';
    });
  }
  logOut(){
    localStorage.removeItem('JWT');
    this.router.navigate(['/login']);
  }

}
