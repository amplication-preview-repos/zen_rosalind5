/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DriverInfoWhereInput } from "./DriverInfoWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DriverInfoOrderByInput } from "./DriverInfoOrderByInput";

@ArgsType()
class DriverInfoFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DriverInfoWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DriverInfoWhereInput, { nullable: true })
  @Type(() => DriverInfoWhereInput)
  where?: DriverInfoWhereInput;

  @ApiProperty({
    required: false,
    type: [DriverInfoOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DriverInfoOrderByInput], { nullable: true })
  @Type(() => DriverInfoOrderByInput)
  orderBy?: Array<DriverInfoOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DriverInfoFindManyArgs as DriverInfoFindManyArgs };