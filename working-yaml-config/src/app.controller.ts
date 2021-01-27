import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { type } from 'os';

@Controller()
export class AppController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  getHello(): string {
    if(this.configService.get<boolean>("bool")){
      return this.configService.get<string>("alternative");
    }
    return this.configService.get<string>("hello");
  }

  @Get("t")//test of wrong conversion
  getWrongConversion():number{
    let ret = this.configService.get<number>("hello");
    console.log("typeof ret:",typeof ret);
    return ret;
  }
}
