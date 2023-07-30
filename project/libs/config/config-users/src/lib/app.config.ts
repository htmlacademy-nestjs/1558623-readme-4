import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';
import { IAppConfig } from '@project/shared/app-types';

export default registerAs('app', (): IAppConfig => {
  const config: IAppConfig = {
    environment: process.env.NODE_ENV,
    port: parseInt(process.env.PORT),
  };

  const validationSchema = Joi.object<IAppConfig, true, IAppConfig>({
    environment: Joi.string().valid('development', 'production').required(),
    port: Joi.number().port(),
  });

  const { error } = validationSchema.validate(config);

  if (error) {
    throw new Error(`
      [Application Config]: Environments validation failed. Please check .env file.
      Error message: Mongo.${error.message},
    `);
  }

  return config;
});
