import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/article';
import { ArticleService } from 'src/app/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mainArticle ?: Article ;
  otherArticles ?: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    	this.mainArticle = this.articleService.getArticleById(1);
      this.otherArticles = this.articleService.getArticles().filter(article => article.id !== 1);
      console.log(this.otherArticles);
  }
}
  