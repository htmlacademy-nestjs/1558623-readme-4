import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { getMongoConnectionString } from '@libs/utils-core';

export const getMongooseOptions = (): MongooseModuleAsyncOptions => {
  return {
    useFactory: (config: ConfigService) => {
      return {
        uri: getMongoConnectionString({
          dbName: config.get('mongo.dbName'),
          dbPassword: config.get('mongo.dbPassword'),
          dbPort: config.get('mongo.dbPort'),
          dbHost: config.get('mongo.dbHost'),
          dbUser: config.get('mongo.dbUser'),
          dbAuthBase: config.get('mongo.dbAuthBase'),
        }),
      };
    },
    inject: [ConfigService],
  };
};
