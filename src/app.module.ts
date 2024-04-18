import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JfyApiController } from './jfy-api/jfy-api.controller';
import { JfyApiService } from './jfy-api/jfy-api.service';
import { JfyApiModule } from './jfy-api/jfy-api.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JFYEntity } from './jfy-api/jfy-api.entity';
@Module({
  imports: [JfyApiModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [JFYEntity],
      synchronize: true,
      autoLoadEntities: true,
      // migrations: [/*...*/],
      // migrationsTableName: "custom_migration_table",
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
