/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DeliveryRequestWhereInput } from "./DeliveryRequestWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DeliveryRequestListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DeliveryRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => DeliveryRequestWhereInput)
  @IsOptional()
  @Field(() => DeliveryRequestWhereInput, {
    nullable: true,
  })
  every?: DeliveryRequestWhereInput;

  @ApiProperty({
    required: false,
    type: () => DeliveryRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => DeliveryRequestWhereInput)
  @IsOptional()
  @Field(() => DeliveryRequestWhereInput, {
    nullable: true,
  })
  some?: DeliveryRequestWhereInput;

  @ApiProperty({
    required: false,
    type: () => DeliveryRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => DeliveryRequestWhereInput)
  @IsOptional()
  @Field(() => DeliveryRequestWhereInput, {
    nullable: true,
  })
  none?: DeliveryRequestWhereInput;
}
export { DeliveryRequestListRelationFilter as DeliveryRequestListRelationFilter };