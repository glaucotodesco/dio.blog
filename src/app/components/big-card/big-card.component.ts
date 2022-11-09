import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/article';
import { ArticleService } from 'src/app/article.service';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input() id: number = 0;
  article?: Article;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.article = this.articleService.getArticleById(this.id);
  }

}
