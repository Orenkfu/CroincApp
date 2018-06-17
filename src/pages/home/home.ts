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
  repos;
  constructor(private navCtrl: NavController, private githubProvider: GithubProvider) {
  }


  getRepos() {
    this.githubProvider.getRepos(this.username).subscribe(response => this.repos = response, error => {
        if (error.status == 404) {
          this.repos = [];
          alert("no results were found.");
        }
    });

  }
  navigateToDetails(repo) {
    this.navCtrl.push(DetailsPage, { repo: repo });
  }
}
