import { LoginModule } from './login/login.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginEntity } from './login/login.entity';
import { VehicleModule } from './vehicle/vehicle.module';
import { VehicleEntity } from './vehicle/vehicle.entity';
import { PublicationModule } from './publication/publication.module';

@Module({
  imports: [PublicationModule,
VehicleModule,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [__dirname + `/**/*.entity{.js, .ts}`],
      synchronize: true,
    }),
    LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
