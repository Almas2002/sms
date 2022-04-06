import {Controller} from '@nestjs/common';
import {AppService} from './app.service';
import {MessagePattern} from "@nestjs/microservices";
import {CheckSmsDto} from "./dto/check-sms.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({cmd:"send-code-to-phone"})
  createMessage(phone:string) {
    return this.appService.createSMSPhone(phone);
  }

  @MessagePattern({cmd:"check-code"})
  checkCode(dto:CheckSmsDto){
    return this.appService.checkCode(dto)
  }
}
