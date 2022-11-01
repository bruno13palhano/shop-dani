import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  facebookUrl = 'https://www.facebook.com/';
  instagramUrl = 'https://www.instagram.com/'
  linkedinUrl = 'https://www.linkedin.com/';
  twitterUrl = 'https://www.twitter.com';

  constructor() { }

  ngOnInit(): void {
  }

  goToSocialMedia(url: string) {
    window.open(url, "");
  }
}
