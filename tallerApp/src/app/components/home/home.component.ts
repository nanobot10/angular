import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showLeftText = true;
  showRightText = false;
  isDuplicate = false;

  superHeroes = ['Batman', 'Shazam', 'Mujer Maravilla', 'Aquaman', 'Green Arrow'];

  constructor() { }

  ngOnInit() {
  }

  onClickLeftButton() {
    this.showLeftText = !this.showLeftText;
  }

  onClickRightButton() {
    this.showRightText = !this.showRightText;
  }

  duplicateHeroes() {
    this.superHeroes.push(...this.superHeroes);
  }

  resetHeroes() {
    this.superHeroes = this.superHeroes.slice(0, 5);
    this.isDuplicate = false;
  }

}
