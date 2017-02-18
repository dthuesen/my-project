import { Component, Input } from '@angular/core';

@Component({
  selector: 'dt-blog-entry',
  templateUrl: 'blog-entry.component.html'
})
export class BlogEntryComponent {
  @Input() entries: any;
  index: number = 0;
  i;

  constructor() {
    this.i = 0;
    this.index = this.i;
    console.log('this.index: ', this.index);
    console.log('this.i: ', this.i);
  }
}
