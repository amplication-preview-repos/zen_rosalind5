import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DriverInfoServiceBase } from "./base/driverInfo.service.base";

@Injectable()
export class DriverInfoService extends DriverInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
