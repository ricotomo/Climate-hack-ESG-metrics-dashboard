import {
  Arg,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import { Product } from "../entities/Product";

@InputType()
class ProductInput {
  @Field()
  name: string;
}

@InputType()
class ProductUpdateInput {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  minutes?: number;
}

@Resolver()
export class ProductResolver {
  @Mutation(() => Product)
  async createProduct(
    @Arg("options", () => ProductInput) options: ProductInput,
  ): Promise<Product> {
    const product = await Product.create(options).save();
    return product;
  }

  @Mutation(() => Boolean)
  async updateProduct(
    @Arg("id", () => Int) id: number,
    @Arg("input", () => ProductUpdateInput) input: ProductUpdateInput,
  ): Promise<boolean> {
    await Product.update({ id }, input);
    return true;
  }

  @Mutation(() => Boolean)
  async deleteProduct(@Arg("id", () => Int) id: number): Promise<boolean> {
    await Product.delete({ id });
    return true;
  }

  @Query(() => Product)
  product(@Arg("id", () => Int) id: number): Promise<Product | undefined> {
    return Product.findOne(id, { relations: ["company"] });
  }

  @Query(() => [Product])
  products(): Promise<Product[]> {
    return Product.find();
  }
}
