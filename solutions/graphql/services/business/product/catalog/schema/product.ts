/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { PaginatedInput } from '@sinapsis-co/cc-sdk/handler/resolver';
import { GraphQLScalarType } from 'graphql';
import { Arg, Field, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver } from 'type-graphql';
import { Product, ProductCreate, ProductList } from '../../model/product';

export const AWSDateTime = new GraphQLScalarType({ name: 'AWSDateTime' });

// Entities
@ObjectType('Product')
export class ProductSchema implements Omit<Product, 'type'> {
  //Key
  @Field((type) => ID)
  public venueId: Product['venueId'];
  @Field((type) => ID)
  public productId: Product['productId'];

  //Body
  @Field((type) => String)
  public name: Product['name'];

  @Field((type) => String)
  public category: Product['category'];

  @Field((type) => String, { nullable: true })
  public description?: Product['description'];

  @Field((type) => Float, { nullable: true })
  public price?: Product['price'];

  //Timers
  @Field((type) => AWSDateTime)
  public createdAt: Product['createdAt'];

  @Field((type) => AWSDateTime)
  public updatedAt: Product['createdAt'];
}

@ObjectType()
export class ProductQueryResult implements ProductList {
  @Field((type) => [ProductSchema])
  items: ProductList['items'];
  @Field((type) => String, { nullable: true })
  nextToken: ProductList['nextToken'];
}

// Inputs
@InputType()
export class ProductInput implements ProductCreate {
  @Field((type) => String)
  public name: Product['name'];

  @Field((type) => String)
  public category: Product['category'];

  @Field((type) => String, { nullable: true })
  public description?: Product['description'];

  @Field((type) => Float, { nullable: true })
  public price?: Product['price'];
}

@InputType()
export class QueryPaginationInput implements PaginatedInput {
  @Field((type) => Int, { nullable: true })
  limit?: PaginatedInput['limit'];
  @Field((type) => String, { nullable: true })
  nextToken?: PaginatedInput['nextToken'];
}

// Resolvers
@Resolver(ProductSchema)
export class ProductResolver {
  constructor() {}

  @Query((returns) => ProductSchema)
  productGet(@Arg('id', (type) => ID) id: string) {}

  @Query((returns) => ProductQueryResult)
  productList(@Arg('input', { nullable: true }) input: QueryPaginationInput) {}

  @Mutation((returns) => ProductSchema)
  productCreate(@Arg('input') input: ProductInput) {}
}
