/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { PaginatedInput } from '@sinapsis-co/cc-sdk/handler/resolver';
import { AWSDateTime } from 'services/business/menu/catalog/schema/ingredient';
import { Arg, Field, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver } from 'type-graphql';
import { Sale, SaleCreate, SaleList } from '../../model/sale';
import { SaleDetail } from '../../model/sale-detail';

// Entities

@ObjectType()
export class SaleKey {
  @Field((type) => ID)
  public venueId: Sale['venueId'];
  @Field((type) => ID)
  public saleId: Sale['saleId'];
}

@ObjectType('Sale')
export class SaleBaseSchema implements Omit<Sale, 'type'> {
  //Key
  @Field((type) => ID)
  public saleId: Sale['saleId'];

  @Field((type) => ID)
  public venueId: Sale['venueId'];

  //Body
  @Field((type) => String)
  public date: Sale['date'];

  @Field((type) => Float)
  public total: Sale['total'];

  //Timers
  @Field((type) => AWSDateTime)
  public createdAt: Sale['createdAt'];

  @Field((type) => AWSDateTime)
  public updatedAt: Sale['updatedAt'];
}

@ObjectType('SaleEntity')
export class SaleEntity extends SaleBaseSchema {
  //Key
  @Field((type) => ID)
  public saleId: Sale['saleId'];

  @Field((type) => ID)
  public venueId: Sale['venueId'];

  //Body
  @Field((type) => String)
  public date: Sale['date'];

  @Field((type) => Float)
  public total: Sale['total'];

  //Aggregates
  @Field((type) => [SaleDetailSchema])
  public details: [SaleDetailSchema];

  //Timers
  @Field((type) => AWSDateTime)
  public createdAt: Sale['createdAt'];

  @Field((type) => AWSDateTime)
  public updatedAt: Sale['updatedAt'];
}

@ObjectType('SaleDetail')
export class SaleDetailSchema implements Omit<SaleDetail, 'type' | 'createdAt' | 'updatedAt'> {
  //Key
  @Field((type) => ID)
  public saleId: SaleDetail['saleId'];

  @Field((type) => ID)
  public venueId: Sale['venueId'];

  @Field((type) => ID)
  public productId: SaleDetail['productId'];

  //Body
  @Field((type) => Int)
  public quantity: SaleDetail['quantity'];

  @Field((type) => Float)
  public subtotal: SaleDetail['subtotal'];
}

@ObjectType()
export class SaleQueryResult {
  @Field((type) => [SaleBaseSchema])
  items: SaleBaseSchema[];
  @Field((type) => String, { nullable: true })
  nextToken: SaleList['nextToken'];
}

@ObjectType()
export class SaleByProductQueryResult {
  @Field((type) => [SaleDetailSchema])
  items: SaleDetailSchema[];
  @Field((type) => String, { nullable: true })
  nextToken: SaleList['nextToken'];
}

// Inputs
@InputType()
export class SaleDetailInput {
  @Field((type) => String)
  public productId: string;

  @Field((type) => Int)
  public quantity: number;

  @Field((type) => Float)
  public subtotal: number;
}

@InputType()
export class SaleInput implements SaleCreate {
  @Field((type) => ID)
  public venueId: Sale['venueId'];

  @Field((type) => String)
  public date: Sale['date'];

  @Field((type) => Float)
  public total: Sale['total'];

  @Field((type) => [SaleDetailInput])
  public details: SaleDetailInput[];
}

@InputType()
export class SaleListInput implements PaginatedInput {
  @Field((type) => ID)
  public venueId: Sale['venueId'];
  @Field((type) => Int, { nullable: true })
  limit?: PaginatedInput['limit'];
  @Field((type) => String, { nullable: true })
  nextToken?: PaginatedInput['nextToken'];
}
@InputType()
export class SaleListByProductInput extends SaleListInput {
  @Field((type) => ID)
  public productId: SaleDetail['productId'];
}

@InputType()
export class SaleKeyInput {
  @Field((type) => ID)
  public venueId: Sale['venueId'];
  @Field((type) => ID)
  public saleId: Sale['saleId'];
}

// Resolvers
@Resolver()
export class SaleResolver {
  constructor() {}

  @Query((returns) => SaleEntity)
  saleGet(@Arg('input') input: SaleKeyInput) {}

  @Query((returns) => SaleQueryResult)
  saleList(@Arg('input') input: SaleListInput) {}

  @Query((returns) => SaleByProductQueryResult)
  saleByProduct(@Arg('input') input: SaleListByProductInput) {}

  @Mutation((returns) => SaleKey)
  saleCreate(@Arg('input') input: SaleInput) {}
}
