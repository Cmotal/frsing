import { Controller, Inject } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';
import { Episode } from '@libs/db/models/episode.model';

@Crud({
    model:Episode
})


@Controller('episodes')
@ApiTags('分集')

export class EpisodesController {
    constructor(@InjectModel(Episode) private readonly model) {}
}
