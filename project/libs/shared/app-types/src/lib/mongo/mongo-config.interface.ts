export interface IMongoDbConfig {
  dbName: string | undefined;
  dbHost: string | undefined;
  dbPort: number | undefined;
  dbUser: string | undefined;
  dbPassword: string | undefined;
  dbAuthBase: string | undefined;
}
