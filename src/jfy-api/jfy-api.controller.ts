import { Controller, Get, Body, Param, Post, Delete } from '@nestjs/common';
import { JfyApiService } from './jfy-api.service';
import { CreateJustForYouDto } from './dtos/jfy-dto';
@Controller('api/jfy')
export class JfyApiController {
    constructor(private justforyou: JfyApiService) { }

    @Get('/:id')
    async findUser(@Param('id') id: number) {
        return this.justforyou.findOne(id)
    }

    @Get('/')
    async findAll() {
        return this.justforyou.findAll()
    }

    @Post('/post')
    createJustForYou(@Body() body: CreateJustForYouDto) {
        // nest extract @body auto and provide as an argument body
        console.log(body.image + body.name + body.price)
        return this.justforyou.create(body.name, body.price, body.image)
    }

    @Delete('/delete/:id')
    removeJustForYou(@Param('id') id: number) {
        return this.justforyou.remove(id)
    }
    @Delete('/delete-all')
    removeAll() {
        return this.justforyou.removeAll()
    }
}
