import {Injectable, NotFoundException} from '@nestjs/common';

/**
 * author: string
 * title: string
 * content: string
 * likeCount: number
 * commentCount: number
 */

export interface PostModel {
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

@Injectable()
export class PostsService {
    getAllPosts(): PostModel[] {
        return posts;
    }

    getPostById(id: number): PostModel {
        const post =  this.findPost(id); // post.id가 숫자라서 id를 +id로 해서 숫자로 바꿔줌
        if (!post) {
            throw new NotFoundException();
        }

        return post;
    }

    createPost(author: string, title: string, content: string): PostModel {
        const post: PostModel = {
            id: posts[posts.length - 1].id + 1,
            author,
            title,
            content,
            likeCount: 0,
            commentCount: 0
        };

        posts = [
            ...posts,
            post
        ]

        return post;
    }

    updatePost(id: number, author: string, title: string, content: string): PostModel {
        const post = this.findPost(id);

        if (!post) {
            throw new NotFoundException();
        }

        if (author) {
            post.author = author;
        }
        if (title) {
            post.title = title;
        }
        if (content) {
            post.content = content;
        }

        posts = posts.map(prev => prev.id === +id ? post : prev);

        return post;
    }

    deletePost(id: number): number {
        const post = this.findPost(id);
        if (!post) {
            throw new NotFoundException();
        }

        posts = posts.filter(post => post.id !== +id);

        return id;
    }

    findPost(id: number): PostModel {
        return posts.find(post => post.id === +id);
    }
}
