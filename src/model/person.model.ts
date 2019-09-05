import mongoose, { Schema, Document } from 'mongoose';
import { ApiModelProperty } from '@nestjs/swagger';

export interface IPerson extends Document {
  name: string;
}

export const PersonSchema = new Schema({
  name: { type: String, required: true },
});

export default mongoose.model<IPerson>('Person', PersonSchema);
