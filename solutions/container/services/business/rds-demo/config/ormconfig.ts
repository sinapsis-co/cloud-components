import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
  type: 'postgres',
  database: 'postgres',
  host: process.env.CC_HOST,
  port: Number(process.env.CC_PORT),
  username: process.env.CC_USER,
  password: process.env.CC_PASS,
  entities: [process.env.CC_ENTITIES!],
  migrations: [process.env.CC_MIGRATIONS!],
});
