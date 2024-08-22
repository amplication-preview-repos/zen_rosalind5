import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DeliveryRequestModuleBase } from "./base/deliveryRequest.module.base";
import { DeliveryRequestService } from "./deliveryRequest.service";
import { DeliveryRequestController } from "./deliveryRequest.controller";
import { DeliveryRequestResolver } from "./deliveryRequest.resolver";

@Module({
  imports: [DeliveryRequestModuleBase, forwardRef(() => AuthModule)],
  controllers: [DeliveryRequestController],
  providers: [DeliveryRequestService, DeliveryRequestResolver],
  exports: [DeliveryRequestService],
})
export class DeliveryRequestModule {}
