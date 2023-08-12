import { registerAs } from '@nestjs/config';
import { IUploaderConfig } from '@libs/shared-app-types';
import * as Joi from 'joi';

export default registerAs('uploader', (): IUploaderConfig => {
  const config: IUploaderConfig = {
    uploadDirectory: process.env.UPLOAD_DIRECTORY,
  };

  const uploaderSchema = Joi.object<IUploaderConfig, true, IUploaderConfig>({
    uploadDirectory: Joi.string().required(),
  });

  const { error } = uploaderSchema.validate(config, { abortEarly: true });

  if (error) {
    throw new Error(
      `[Uploader Config]: Environments validation failed. Please check .env file.
       Error message: ${error.message}`,
    );
  }

  return config;
});
