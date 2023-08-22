import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleGeneratorComponent } from './article-generator.component';

describe('ArticleGeneratorComponent', () => {
  let component: ArticleGeneratorComponent;
  let fixture: ComponentFixture<ArticleGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleGeneratorComponent]
    });
    fixture = TestBed.createComponent(ArticleGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
