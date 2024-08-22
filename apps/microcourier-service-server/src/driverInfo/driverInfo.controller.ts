import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DriverInfoService } from "./driverInfo.service";
import { DriverInfoControllerBase } from "./base/driverInfo.controller.base";

@swagger.ApiTags("driverInfos")
@common.Controller("driverInfos")
export class DriverInfoController extends DriverInfoControllerBase {
  constructor(
    protected readonly service: DriverInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
