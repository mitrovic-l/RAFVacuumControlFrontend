import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorMessage } from '../model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ErrormsgService {

  private readonly apiUrl = environment.postApi
  constructor(private httpClient: HttpClient) { }
  getErrors():Observable<ErrorMessage[]>{
    const headers = { 'Authorization': 'Bearer ' +  localStorage.getItem("JWT")};
    return this.httpClient.get<ErrorMessage[]>(`${this.apiUrl}/errors`, { headers});
  }
}
