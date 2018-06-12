import { GithubProvider } from './../../providers/github/github';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  private readme;
  private repo;
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private githubService: GithubProvider) {
    this.repo = navParams.get('repo');
    this.getRepoDetails();
  }

  getRepoDetails() {
    this.githubService.getDetails(this.repo)
      .subscribe(
        response => this.readme = response,
        error => {
          if (error.status == 404) this.readme = 'This repo does not have a readme.';
          else console.error(error);
        }
      )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
