import {Controller, Get} from '@nestjs/common';
import { PostsService } from './posts.service';

// nest g resource -> posts

/**
 * author: string
 * title: string
 * content: string
 * likeCount: number
 * commentCount: number
 */

interface Post {
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPost(): Post {
    return {
      author: 'marvel',
      title: 'ironman',
      content: '아크 원자로 개발한 아이언맨',
      likeCount: 1000000,
      commentCount: 9999
    }
  }
}
