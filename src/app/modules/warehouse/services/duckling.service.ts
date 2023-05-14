import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DucklingI} from "../interfaces/duckling.interface";

@Injectable({
  providedIn: 'root'
})
export class DucklingService {

  private apiUrl: string = environment.apiUrl;
  private baseUrl = `${this.apiUrl}/warehouse/duckling`;
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<DucklingI[]>(this.baseUrl);
  }

  save(duckling: DucklingI): Observable<any> {
    return this.http.post<boolean>(this.baseUrl, duckling);
  }

  update(duckling: DucklingI): Observable<any> {
    return this.http.put<boolean>(this.baseUrl, duckling);
  }

  delete(ducklingId: number): Observable<any> {
    const url = `${this.baseUrl}/${ducklingId}`;
    return this.http.delete<boolean>(url);
  }


}
