import { Course } from '@libs/db/models/course.model';
import { Controller, Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: Course,
})
@Controller('courses')
@ApiTags('课程')
export class CoursesController {
  constructor(@InjectModel(Course) private readonly model) {}

  @Get('option')
  option() {
    return {
      title: '课程管理',
      column: [
        { prop: 'title', label: '标题',sortable:true, search:true, regex:true },
        { prop: 'cover', label: '封面图' }
      ]
    }
  }
}
