import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  search: String = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigateByUrl('/');
  }

  goCategories() {
    // console.log('fui clicado!');
    this.router.navigateByUrl('/categories');
  }
}
