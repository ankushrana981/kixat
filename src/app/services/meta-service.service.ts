import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  setMetaTags(title: any, description?: any, keywords?: any) {
    if (title) this.updateTitle(title);
    if (description) this.updateDescription(description);
    if (keywords) this.updateKeywords(keywords);
  }

  updateTitle(title: string) {
    this.title.setTitle(title);
  }

  updateDescription(description: string) {
    this.meta.updateTag({ name: 'description', content: description });
  }

  updateKeywords(keywords: string) {
    this.meta.updateTag({ name: 'keywords', content: keywords });
  }
}
