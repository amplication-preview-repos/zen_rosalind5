/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  DeliveryRequest as PrismaDeliveryRequest,
  Payment as PrismaPayment,
} from "@prisma/client";

export class DeliveryRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DeliveryRequestCountArgs, "select">
  ): Promise<number> {
    return this.prisma.deliveryRequest.count(args);
  }

  async deliveryRequests(
    args: Prisma.DeliveryRequestFindManyArgs
  ): Promise<PrismaDeliveryRequest[]> {
    return this.prisma.deliveryRequest.findMany(args);
  }
  async deliveryRequest(
    args: Prisma.DeliveryRequestFindUniqueArgs
  ): Promise<PrismaDeliveryRequest | null> {
    return this.prisma.deliveryRequest.findUnique(args);
  }
  async createDeliveryRequest(
    args: Prisma.DeliveryRequestCreateArgs
  ): Promise<PrismaDeliveryRequest> {
    return this.prisma.deliveryRequest.create(args);
  }
  async updateDeliveryRequest(
    args: Prisma.DeliveryRequestUpdateArgs
  ): Promise<PrismaDeliveryRequest> {
    return this.prisma.deliveryRequest.update(args);
  }
  async deleteDeliveryRequest(
    args: Prisma.DeliveryRequestDeleteArgs
  ): Promise<PrismaDeliveryRequest> {
    return this.prisma.deliveryRequest.delete(args);
  }

  async findPayments(
    parentId: string,
    args: Prisma.PaymentFindManyArgs
  ): Promise<PrismaPayment[]> {
    return this.prisma.deliveryRequest
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .payments(args);
  }
}
