import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostItemComponent } from './blog-post-item.component';

describe('BlogPostItemComponent', () => {
  let component: BlogPostItemComponent;
  let fixture: ComponentFixture<BlogPostItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogPostItemComponent]
    });
    fixture = TestBed.createComponent(BlogPostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
