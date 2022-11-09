import { Injectable } from '@angular/core';
import { Article } from './article';
import { ARTICLE_MOCK } from './data/article_mock';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticleById(id:number):Article {
    return ARTICLE_MOCK.filter(data => data.id === id)[0];
  }
  
  getArticles():Article[] {
    return ARTICLE_MOCK;
  }

}
