/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Arg, Field, ID, InputType, Mutation, ObjectType, Query, Resolver, registerEnumType } from 'type-graphql';
import { Ingredient, IngredientCreate, Measurement } from '../model/ingredient';

// Entities
@ObjectType()
export class IngredientSchema implements Ingredient {
  @Field((type) => ID)
  public id: string;

  @Field()
  public name: string;
  @Field({ nullable: true })
  public description?: string;
  @Field((type) => Measurement)
  public measurement: Measurement;
  @Field()
  public category: string;
  @Field()
  public price: number;
  @Field()
  public createdAt: Date;
  @Field()
  public updatedAt: Date;
  // @Field(() => [String])
  // ingredients: string[];
}

registerEnumType(Measurement, { name: 'Measurement' });

@ObjectType()
export class IngredientQueryResult {
  @Field((type) => [IngredientSchema])
  items: IngredientSchema[];
  @Field({ nullable: true })
  nextToken?: string;
}

// Inputs
@InputType()
export class IngredientInput implements IngredientCreate {
  @Field()
  name: string;
  @Field({ nullable: true })
  description?: string;
  @Field((type) => Measurement)
  measurement: Measurement;
  @Field()
  category: string;
  @Field()
  price: number;
}

@InputType()
export class QueryPaginationInput {
  @Field()
  limit: number;
  @Field()
  nextToken: string;
}

// Resolvers
@Resolver(IngredientSchema)
export class IngredientResolver {
  constructor() {}

  @Query((returns) => IngredientSchema)
  getIngredient(@Arg('id', (type) => ID) id: string) {}

  @Query((returns) => IngredientQueryResult)
  listIngredients(@Arg('input', { nullable: true }) input: QueryPaginationInput) {}

  @Mutation((returns) => IngredientSchema)
  addIngredient(@Arg('input') input: IngredientInput) {}
}
