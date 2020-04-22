import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { TopHeadline, Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {


 
  news: Article[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getTopHeadlines()
      .subscribe( resp => {
        this.news = resp.articles;
      } );
  }

}
