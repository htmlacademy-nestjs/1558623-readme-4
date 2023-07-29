import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';
import { IMongoDbConfig } from '@project/shared/app-types';

export default registerAs('usersDb', (): IMongoDbConfig => {
  const config: IMongoDbConfig = {
    dbName: process.env.MONGO_NAME,
    dbHost: process.env.MONGO_HOST,
    dbPort: parseInt(process.env.MONGO_PORT),
    dbUser: process.env.MONGO_USER,
    dbPassword: process.env.MONGO_PASSWORD,
    dbAuthBase: process.env.MONGO_AUTH_BASE,
  };

  const validationScheme = Joi.object<IMongoDbConfig, true, IMongoDbConfig>({
    dbName: Joi.string().required(),
    dbHost: Joi.string().required(),
    dbPort: Joi.number().port().required(),
    dbUser: Joi.string().required(),
    dbPassword: Joi.string().required(),
    dbAuthBase: Joi.string().valid('admin').required(),
  });

  const { error } = validationScheme.validate(config);

  if (error) {
    throw new Error(`
      [DB Config]: Environments validation failed. Please check .env file.
      Error message: ${error.message}
    `);
  }

  return config;
});
