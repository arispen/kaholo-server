import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonSchema } from './model/person.model';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:7vXYF4nNu8B9SnH5@cluster0-qnjcz.mongodb.net/matt?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: 'Person', schema: PersonSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
