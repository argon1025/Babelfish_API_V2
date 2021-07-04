import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokenModule } from './token/token.module';
import { UsersModule } from './users/users.module';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [TokenModule, UsersModule, NotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
