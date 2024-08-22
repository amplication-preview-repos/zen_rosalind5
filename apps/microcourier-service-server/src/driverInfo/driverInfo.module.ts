import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DriverInfoModuleBase } from "./base/driverInfo.module.base";
import { DriverInfoService } from "./driverInfo.service";
import { DriverInfoController } from "./driverInfo.controller";
import { DriverInfoResolver } from "./driverInfo.resolver";

@Module({
  imports: [DriverInfoModuleBase, forwardRef(() => AuthModule)],
  controllers: [DriverInfoController],
  providers: [DriverInfoService, DriverInfoResolver],
  exports: [DriverInfoService],
})
export class DriverInfoModule {}
