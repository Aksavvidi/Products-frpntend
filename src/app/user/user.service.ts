import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const USER_API = 'https://codingfactory.ddns.net/api/user'

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  findAll(){
    return this.http.get(`${USER_API}/findAll`)
  }
}

