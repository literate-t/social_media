import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {PostModel, PostsService} from './posts.service';

// nest g resource -> posts



@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  
  // 1) Get /posts
  //    모든 포스트를 가져오기
  @Get()
  getPosts(): PostModel[] {
    return this.postsService.getAllPosts();
  }
  
  // 2) GET /posts/:Id
  //    id에 해당되는 post를 가져오기
  // @Get('/:id')
  @Get(':id')
  getPost(@Param('id') id: string): PostModel {
    return this.postsService.getPostById(+id);
  }

  
  // 3) POST /posts
  //    post 생성하기
  @Post()
  postPosts(
      @Body('author') author: string,
      @Body('title') title: string,
      @Body('content') content: string,
  ) {
    return this.postsService.createPost(author, title, content);
  }
  
  // 4) PUT /posts/:id
  //    id에 해당되는 POST를 변경한다
  @Put(':id')
  putPost(
      @Param('id') id: string,
      @Body('author') author?: string,
      @Body('title') title?: string,
      @Body('content') content?: string,
  ): PostModel {
    return this.postsService.updatePost(+id, author, title, content);
  }
  
  // 5) DELETE /posts/:id
  //    id에 해당하는 POST를 삭제한다
  @Delete(':id')
  deletePost(
      @Param('id') id: string
  ): number {
    return this.postsService.deletePost(+id);
  }
}
