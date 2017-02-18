
import { Component } from '@angular/core';
import { BlogEntry } from './blog-entry';


@Component({
  selector: 'dt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  entries: any[] = [];

  constructor() {
    this.entries = [
      <BlogEntry>{
        title: 'Ein Standardeintrag als Titel',
        image: 'http://lorempixel.com/150/150/people/3',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sun'
      },
      <BlogEntry>{
        title: 'Der nächste Standardeintrag als Titel',
        image: 'http://lorempixel.com/150/150/people/5',
        text: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
      },
    ];
  }

}
