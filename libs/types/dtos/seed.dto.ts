import { NewSeed, SOURCE } from "../db/seeds.schema";
import { IsString, IsInt, IsOptional, IsEnum, IsUrl } from "class-validator";

type SeedBase = Omit<NewSeed, "id" | "createdAt" | "updatedAt">;

export class CreateSeedDto implements SeedBase {
  @IsString()
  readonly name: string;

  @IsString()
  readonly species: string;

  @IsEnum(SOURCE)
  readonly source: NewSeed["source"];

  @IsOptional()
  @IsInt()
  readonly harvestYear?: number;

  @IsOptional()
  @IsInt()
  readonly viabilityYears?: number;

  @IsInt()
  readonly quantity: number;

  @IsOptional()
  @IsUrl()
  readonly photoUrl?: string;

  @IsOptional()
  @IsString()
  readonly note?: string;
}
