import { Module } from "@nestjs/common";
import { EmailService } from "./email/email.service";
import { UtilsService } from "./utils/utils.service";

@Module({
  imports: [],
  controllers: [],
  providers: [EmailService, UtilsService],
})
export class CoreModule {}
