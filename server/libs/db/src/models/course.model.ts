import { ApiProperty } from '@nestjs/swagger';
import { arrayProp, modelOptions, prop, Ref } from '@typegoose/typegoose'
import { model } from 'mongoose';
import { Episode } from './episode.model';

@modelOptions({
    schemaOptions: {
        timestamps:true
    }
})
export class Course  {
    @ApiProperty({description: '标题'})
    @prop()
    title:string;

    @ApiProperty({description: '封面图'})
    @prop()
    cover:string;

    @ApiProperty({description: '分集'})
    @arrayProp({itemsRef: 'Episode'})
    episodes: Ref<Episode>[]
}

