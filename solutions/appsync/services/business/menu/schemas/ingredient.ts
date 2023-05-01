/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Arg, Field, ID, InputType, Mutation, ObjectType, Query, Resolver, registerEnumType } from 'type-graphql';
import { SerializableEntity, SerializeKeyMapper } from '../decorators';
import { Ingredient, Measurement } from '../entities/ingredient';

export interface SerializableEntity<Original, Mapped> {
  serialize: (data: Entity<Original>) => Entity<Mapped>;
  deserialize: (data: Entity<Mapped>) => Entity<Original>;
}

export type Entity<T> = Omit<T, 'serialize' | 'deserialize'>;

// Entities
@ObjectType()
@SerializableEntity
export class IngredientSchema implements Ingredient, SerializableEntity<IngredientSchema, any> {
  @SerializeKeyMapper('pk')
  @Field((type) => ID)
  public id: string;

  @SerializeKeyMapper('sk')
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
  serialize: (p: Entity<IngredientSchema>) => any;
  deserialize: (data: any) => Entity<IngredientSchema>;
}

@ObjectType()
export class IngredientQueryResult {
  @Field((type) => [IngredientSchema])
  items: IngredientSchema[];
  @Field({ nullable: true })
  nextToken?: string;
}

registerEnumType(Measurement, { name: 'Measurement' });

// Inputs
@InputType()
export class IngredientInput {
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
