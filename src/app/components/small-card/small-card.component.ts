import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/article';
import { ArticleService } from 'src/app/article.service';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input() id:number = 0;
  article ?: Article;

  constructor(private articleService:ArticleService) { }

  ngOnInit(): void {
    this.article = this.articleService.getArticleById(this.id);
  }

}
