import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showLeftText = false;
  showRightText = false;

  constructor() { }

  ngOnInit() {
  }

  onClickLeftButton(){
    this.showLeftText = !this.showLeftText;
  }

  onClickRightButton(){
    this.showRightText = !this.showRightText;
  }

}
