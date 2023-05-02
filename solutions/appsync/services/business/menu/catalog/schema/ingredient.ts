/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { PaginatedInput } from '@sinapsis-co/cc-sdk/handler/resolver';
import { GraphQLScalarType } from 'graphql';
import {
  Arg,
  Field,
  Float,
  ID,
  InputType,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  registerEnumType,
} from 'type-graphql';
import { Ingredient, IngredientCreate, IngredientList, Measurement } from '../../model/ingredient';

export const AWSDateTime = new GraphQLScalarType({ name: 'AWSDateTime' });

// Entities
@ObjectType()
export class IngredientSchema implements Ingredient {
  //Key
  @Field((type) => ID)
  public id: Ingredient['id'];

  //Body
  @Field((type) => String)
  public name: Ingredient['name'];

  @Field((type) => Measurement)
  public measurement: Ingredient['measurement'];

  @Field((type) => String)
  public category: Ingredient['category'];

  @Field((type) => String, { nullable: true })
  public description?: Ingredient['description'];

  @Field((type) => Float, { nullable: true })
  public price?: Ingredient['price'];

  //Timers
  @Field((type) => AWSDateTime)
  public createdAt: Ingredient['createdAt'];

  @Field((type) => AWSDateTime)
  public updatedAt: Ingredient['createdAt'];

  // @Field(() => [String])
  // ingredients: string[];
}

@ObjectType()
export class IngredientQueryResult implements IngredientList {
  @Field((type) => [IngredientSchema])
  items: IngredientList['items'];
  @Field((type) => String, { nullable: true })
  nextToken: IngredientList['nextToken'];
}

// Inputs
@InputType()
export class IngredientInput implements IngredientCreate {
  @Field((type) => String)
  public name: Ingredient['name'];

  @Field((type) => Measurement)
  public measurement: Ingredient['measurement'];

  @Field((type) => String)
  public category: Ingredient['category'];

  @Field((type) => String, { nullable: true })
  public description?: Ingredient['description'];

  @Field((type) => Float, { nullable: true })
  public price?: Ingredient['price'];
}

@InputType()
export class QueryPaginationInput implements PaginatedInput {
  @Field((type) => Int, { nullable: true })
  limit?: PaginatedInput['limit'];
  @Field((type) => String, { nullable: true })
  nextToken?: PaginatedInput['nextToken'];
}

// Enums
registerEnumType(Measurement, { name: 'Measurement' });

// Resolvers
@Resolver(IngredientSchema)
export class IngredientResolver {
  constructor() {}

  @Query((returns) => IngredientSchema)
  ingredientGet(@Arg('id', (type) => ID) id: string) {}

  @Query((returns) => IngredientQueryResult)
  ingredientList(@Arg('input', { nullable: true }) input: QueryPaginationInput) {}

  @Mutation((returns) => IngredientSchema)
  ingredientCreate(@Arg('input') input: IngredientInput) {}
}
