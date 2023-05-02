/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { GraphQLScalarType, Kind } from 'graphql';
import { Arg, Field, ID, InputType, Mutation, ObjectType, Query, Resolver, registerEnumType } from 'type-graphql';
import { Ingredient, IngredientCreate, Measurement } from '../model/ingredient';

export const AWSDate = new GraphQLScalarType({
  name: 'AWSDate',
  parseValue(value: string) {
    return new Date(value); // value from the client input variables
  },
  serialize(value: Date) {
    return value.toISOString(); // value sent to the client
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value);
    }
    return null;
  },
});

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
  @Field((type) => AWSDate)
  public createdAt: Date;
  @Field((type) => AWSDate)
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
  ingredientGet(@Arg('id', (type) => ID) id: string) {}

  @Query((returns) => IngredientQueryResult)
  ingredientList(@Arg('input', { nullable: true }) input: QueryPaginationInput) {}

  @Mutation((returns) => IngredientSchema)
  ingredientCreate(@Arg('input') input: IngredientInput) {}
}
