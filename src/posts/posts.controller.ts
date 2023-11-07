import {Controller, Get, Param} from '@nestjs/common';
import { PostsService } from './posts.service';

// nest g resource -> posts

/**
 * author: string
 * title: string
 * content: string
 * likeCount: number
 * commentCount: number
 */

interface PostModel {
  id: number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

let posts: PostModel[] = [
  {
    id: 1,
    author: 'marvel',
    title: 'ironman',
    content: '아크 원자로 만들고 있는 로다쥬',
    likeCount: 100000,
    commentCount: 99999
  },
  {
    id: 2,
    author: 'marvel',
    title: 'thor',
    content: '망치의 신이 된 토르',
    likeCount: 200000,
    commentCount: 8888
  },
  {
    id: 3,
    author: 'marvel',
    title: 'hulk',
    content: '친절한 헐크씨',
    likeCount: 300000,
    commentCount: 77777
  },
];

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  
  // 1) Get /posts
  //    모든 포스트를 가져오기
  @Get()
  getPosts(): PostModel[] {
    return posts;
  }
  
  // 2) GET /posts/:Id
  //    id에 해당되는 post를 가져오기
  // @Get('/:id')
  @Get(':id')
  getPost(@Param('id') id: string): PostModel {
    return posts.find((post) => post.id === +id); // post.id가 숫자라서 id를 +id로 해서 숫자로 바꿔줌
  }

  
  // 3) POST /posts
  //    post 생성하기
  
  // 4) PUT /posts/:id
  //    id에 해당되는 POST를 변경한다
  
  // 5) DELETE /posts/:id
  //    id에 해당하는 POST를 삭제한다
}
