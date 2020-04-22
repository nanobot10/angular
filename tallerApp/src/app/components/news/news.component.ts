import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {


  seconds: number;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getIntervalSeconds(1000)
      .subscribe( i => {
        this.seconds = i;
      } );
  }

}
