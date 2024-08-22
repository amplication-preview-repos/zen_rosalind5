import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DeliveryRequestService } from "./deliveryRequest.service";
import { DeliveryRequestControllerBase } from "./base/deliveryRequest.controller.base";

@swagger.ApiTags("deliveryRequests")
@common.Controller("deliveryRequests")
export class DeliveryRequestController extends DeliveryRequestControllerBase {
  constructor(
    protected readonly service: DeliveryRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
