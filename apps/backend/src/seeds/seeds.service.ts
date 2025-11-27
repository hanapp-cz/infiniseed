import { Inject, Injectable } from '@nestjs/common';
import { DATABASE_CONNECTION } from 'src/db/db.module';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import type { CreateSeedDto, NewSeed } from '@/types';
import { seeds } from '@/types';

@Injectable()
export class SeedsService {
  constructor(
    @Inject(DATABASE_CONNECTION)
    private readonly dbConnection: PostgresJsDatabase,
  ) {}

  findAll() {
    return this.dbConnection.select().from(seeds);
  }

  async create(dto: CreateSeedDto): Promise<NewSeed> {
    const seedData: NewSeed = dto;

    const [seed] = await this.dbConnection
      .insert(seeds)
      .values(seedData)
      .returning();

    return seed;
  }
}
