import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/article';
import { ArticleService } from 'src/app/article.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  id: number = 0;
  article ?: Article;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( param => this.id = parseInt(param.get("id") || "0"));
    this.article = this.articleService.getArticleById(this.id);
  }

}
