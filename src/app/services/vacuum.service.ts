import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Vacuum } from '../model';

@Injectable({
  providedIn: 'root'
})
export class VacuumService {
  private readonly apiUrl = environment.postApi

  constructor(private httpClient: HttpClient) { }

  getVacuums(): Observable<Vacuum[]>{
    const headers = { 'Authorization': 'Bearer ' +  localStorage.getItem("JWT")};
    //return this.httpClient.get<User>(`${this.apiUrl}/user/find/`+email, {headers});
    return this.httpClient.get<Vacuum[]>(`${this.apiUrl}/vacuum/all`, {headers});
  }

  addVacuum(name: string): Observable<Vacuum> {
    const headers = { 'Authorization': 'Bearer ' +  localStorage.getItem("JWT")};
    return this.httpClient.post<Vacuum>(`${this.apiUrl}/vacuum/add`, {
      name: name
    }, { headers });
  }

  searchVacuums(query: string): Observable<Vacuum[]> {
    const headers = { 'Authorization': 'Bearer ' +  localStorage.getItem("JWT")};
    return this.httpClient.get<Vacuum[]>(`${this.apiUrl}/vacuum/search/${query}`, {headers});
  }
}
