import { Component, Input } from '@angular/core';

@Component({
  selector: 'dt-blog-list',
  templateUrl: './blog-list.component.html',
  styles: ['']
})
export class BlogListComponent {
  @Input() entries: any[];
}
