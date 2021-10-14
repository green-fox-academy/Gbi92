import { BlogPost } from './blog-post';

class Blog {
  private listOfBlogPosts: BlogPost[];

  constructor() {
    this.listOfBlogPosts = [];
  }

  public getListOfBlogPosts(): BlogPost[] {
    return this.listOfBlogPosts;
  }

  public add(blogPost: BlogPost): void {
    this.listOfBlogPosts.push(blogPost);
  }

  public delete(index: number): void {
    this.listOfBlogPosts.splice(index, 1);
  }

  public update(index: number, blogPost: BlogPost) {
    this.listOfBlogPosts.splice(index, 1, blogPost);
  }
}
