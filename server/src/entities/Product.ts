import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Company } from "./Company";

@ObjectType()
@Entity()
export class Product extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  companyId: number;

  @Field(() => Company)
  @ManyToOne(() => Company, (company) => company.products)
  company: Company;

  @Field()
  @Column()
  ghgScopeOne: number;

  @Field()
  @Column()
  ghgScopeTwo: number;

  @Field()
  @Column()
  ghgScopeThree: number;

  @Field()
  @Column()
  carbonFootprint: number;

  @Field()
  @Column()
  ghgIntensity: number;

  @Field()
  @Column()
  exposureToF: number;

  @Field()
  @Column()
  shareNonRen: number;

  @Field()
  @Column()
  energyConsumption: number;

  @Field()
  @Column()
  negBiodiversity: number;

  @Field()
  @Column()
  emToWater: number;

  @Field()
  @Column()
  hazardousWaste: number;
}
