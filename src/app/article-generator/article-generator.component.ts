import { Component } from '@angular/core';
import articles from '../../assets/articles.json';

@Component({
  selector: 'app-article-generator',
  templateUrl: './article-generator.component.html',
  styleUrls: ['./article-generator.component.scss']
})
export class ArticleGeneratorComponent {
  articles = articles;

  openMenu() {
    // Logic to handle the menu click, such as opening a dropdown or dialog with more options.
    console.log('Menu clicked');
  }
}
