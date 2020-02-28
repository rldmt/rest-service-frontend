import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${baseUrl}` + '/hotels');
  }

  create(data) {
    console.log(`${baseUrl}` + '/hotels');
    return this.http.post(`${baseUrl}` + '/hotels', data);
  }
  
  get(id) {
    console.log(`${baseUrl}` + '/hotel/'+`${id}`);
    return this.http.get(`${baseUrl}` + '/hotel/' + `${id}`);
  }

  delete(id: number) {
    console.log(`${baseUrl}` + '/hotel/' + `${id}`);
    return this.http.delete(`${baseUrl}` + '/hotel/'+`${id}`)
  }
}
