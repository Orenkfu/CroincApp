import { DetailsPage } from './../details/details';
import { GithubProvider } from './../../providers/github/github';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: string;
  errorDetails;
  repos;
  constructor(private navCtrl: NavController, private githubProvider: GithubProvider) {
  }


  getRepos() {
    console.log(this.username);
    this.githubProvider.getRepos(this.username).subscribe(response => this.repos = response, error => this.errorDetails = error.error);

  }
  navigateToDetails(repo) {
    console.log(repo);
    this.navCtrl.push(DetailsPage, { repo: repo });
  }
}
