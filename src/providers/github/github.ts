import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operator/map';
@Injectable()
export class GithubProvider {

  constructor(public http: HttpClient) {

  }
  getRepos(username) {
    return this.http.get(`https://api.github.com/users/${username}/repos`);
  }
  getDetails(repo) {
    let headers = new HttpHeaders().append('Accept', 'application/vnd.github.VERSION.html');

    return this.http.get(`${repo.url}/readme`, { headers: headers, responseType: 'text' });


  }
}
