import { Injectable } from '@nestjs/common';
import { IPerson } from './model/person.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('Person') private readonly personModel: Model<IPerson>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async setData(personData: IPerson): Promise<IPerson> {
    const person = new this.personModel(personData);
    return await person.save();
  }
}
