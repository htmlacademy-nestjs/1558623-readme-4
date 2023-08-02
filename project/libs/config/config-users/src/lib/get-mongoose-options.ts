import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { getMongoConnectionString } from '@project/utils/utils-core';

export const getMongooseOptions = (): MongooseModuleAsyncOptions => {
  return {
    useFactory: (config: ConfigService) => {
      return {
        uri: getMongoConnectionString({
          dbName: config.get('usersDb.dbName'),
          dbPassword: config.get('usersDb.dbPassword'),
          dbPort: config.get('usersDb.dbPort'),
          dbHost: config.get('usersDb.dbHost'),
          dbUser: config.get('usersDb.dbUser'),
          dbAuthBase: config.get('usersDb.dbAuthBase'),
        }),
      };
    },
    inject: [ConfigService],
  };
};
