import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JFYEntity } from './jfy-api.entity';
import { JfyApiController } from './jfy-api.controller';
import { JfyApiService } from './jfy-api.service';
@Module({
    imports: [
        TypeOrmModule.forFeature([JFYEntity])
    ],
    controllers: [JfyApiController],
    providers: [JfyApiService]
})
export class JfyApiModule { }

