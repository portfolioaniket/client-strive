import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse, Client } from '../_models/client.model';
import { CLIENT } from '../_const/client.const';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  getAllClients():Observable<APIResponse>{
    return this.http.get<APIResponse>(CLIENT.API_ENDPOINTS.GET_ALL_CLIENTS)
  }
  addUpdateClient(payload:Client){
    return this.http.post(CLIENT.API_ENDPOINTS.ADD_UPDATE_CLIENT, payload)
  }
  getClientById(params:HttpParams):Observable<APIResponse>{
    return this.http.get<APIResponse>(CLIENT.API_ENDPOINTS.GET_CLIENT_BY_CLIENT_ID, {params})
  }
  deleteClient(params:HttpParams){
    return this.http.delete(CLIENT.API_ENDPOINTS.DELETE_CLIENT, {params})
  }
}
