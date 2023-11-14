import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
      PostsModule,
      TypeOrmModule.forRoot({
        // database
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres', //TODO 나중에 환경변수로 처리할 것
        database: 'postgres',
        entities: [],
        synchronize: true, // nestjs에서 작성하는 typeorm 코드와 데이터베이스를 싱크를 맞출건지(개발에서만 true)
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
