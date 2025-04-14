// src/data-source.ts
import { DataSource } from "typeorm";
import { Country } from "./entity/Country";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "db.sqlite",
  synchronize: true,
  entities: [Country],
});
