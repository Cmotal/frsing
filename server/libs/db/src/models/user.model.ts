import { ApiProperty } from '@nestjs/swagger';
import { modelOptions, prop } from '@typegoose/typegoose'
import { model } from 'mongoose';

@modelOptions({
    schemaOptions: {
        timestamps:true
    }
})
export class User  {
    @ApiProperty({description: '用户名'})
    @prop()
    username:string;

    @ApiProperty({description: '密码'})
    @prop()
    password:string
}

