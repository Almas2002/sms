import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Sms} from "./sms.entity";
import {ConfigModule} from "@nestjs/config";
require('dotenv').config()
@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DB_HOST,
            port: +process.env.DB_PORT,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [Sms],
            synchronize: true,
        }),
        TypeOrmModule.forFeature([Sms])
        , ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env'
        })
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
