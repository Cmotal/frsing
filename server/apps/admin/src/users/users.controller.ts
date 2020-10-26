import { Controller, Inject } from '@nestjs/common';
import { User } from 'libs/db/src/models/user.model';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
    model:User
})

@Controller('users')
@ApiTags('用户')

export class UsersController {
    constructor(@InjectModel(User) private readonly model) {}
}