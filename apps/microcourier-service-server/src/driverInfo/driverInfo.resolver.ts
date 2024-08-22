import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DriverInfoResolverBase } from "./base/driverInfo.resolver.base";
import { DriverInfo } from "./base/DriverInfo";
import { DriverInfoService } from "./driverInfo.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DriverInfo)
export class DriverInfoResolver extends DriverInfoResolverBase {
  constructor(
    protected readonly service: DriverInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
