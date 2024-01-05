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
  turnOnVacuum(vacuumId: number){
    const headers = { 'Authorization': 'Bearer ' +  localStorage.getItem("JWT")};
    return this.httpClient.get(`${this.apiUrl}/vacuum/start/${vacuumId}`, { headers });
  }
  turnOffVacuum(vacuumId: number){
    const headers = { 'Authorization': 'Bearer ' +  localStorage.getItem("JWT")};
    return this.httpClient.get(`${this.apiUrl}/vacuum/stop/${vacuumId}`, { headers });
  }
  deactivateVacuum(vacuumId: number): Observable<Vacuum>{
    const headers = { 'Authorization': 'Bearer ' +  localStorage.getItem("JWT")};
    return this.httpClient.delete<Vacuum>(`${this.apiUrl}/vacuum/remove/${vacuumId}`, { headers });
  }
  dischargeVacuum(vacuumId: number){
    const headers = { 'Authorization': 'Bearer ' +  localStorage.getItem("JWT")};
    return this.httpClient.get(`${this.apiUrl}/vacuum/discharge/${vacuumId}`, { headers });
  }
  scheduleVacuumOperation(vacuumId: number, operation: string, scheduledTime: string){
    const headers = { 'Authorization': 'Bearer ' +  localStorage.getItem("JWT")};
    return this.httpClient.post(`${this.apiUrl}/vacuum/schedule`, {
      vacuumId: vacuumId,
      scheduledTime: scheduledTime,
      operation: operation
    }, { headers, responseType: 'text' });
  }
}
