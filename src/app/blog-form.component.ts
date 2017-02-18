import {
         Component,
         EventEmitter,
         Output,
        } from '@angular/core';
import { BlogEntry } from './blog-entry';


@Component({
  selector: 'dt-blog-form',
  templateUrl: 'blog-form.component.html',
  styles: ['']
})
export class BlogFormComponent {

  blogEntry;
  titleField;
  imageField;
  textField;

  @Output() entryCreated = new EventEmitter();

  createBlogEntry(title: string, image: string, text: string) {
    this.entryCreated.emit(new BlogEntry(title, image, text));
    console.log('(D 1) BlogFormComponent - in createBlogEntry() - this.entryCreated: ', this.entryCreated);
    console.log('(D 2) BlogFormComponent - in createBlogEntry() - this.entryCreated: ', this.blogEntry);
    this.titleField = '';
    this.imageField = '';
    this.textField = '';
  }
}
