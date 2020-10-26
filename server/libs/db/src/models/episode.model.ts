import { ApiProperty } from '@nestjs/swagger';
import { modelOptions, prop } from '@typegoose/typegoose'
import { model } from 'mongoose';

@modelOptions({
    schemaOptions: {
        timestamps:true
    }
})

export class Episode {
    @ApiProperty({description: '分集名'})
    @prop()
    title:string;

    @ApiProperty({description: '文件'})
    @prop()
    file: string;
}