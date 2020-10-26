import { Episode } from '@libs/db/models/episode.model';
import { Controller, Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: Episode,
})
@Controller('episodes')
@ApiTags('分集')
export class EpisodesController {
  constructor(@InjectModel(Episode) private readonly model) {}

  @Get('option')
  option() {
    return {
      title: '课时管理',
      column: [
        { prop: 'title', label: '标题' },
        // { prop: 'cover', label: '封面图' }
      ]
    }
  }
}
