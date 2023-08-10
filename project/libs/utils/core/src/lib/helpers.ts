import { ClassConstructor, plainToInstance } from 'class-transformer';
import { IMongoDbConfig } from '@libs/shared-app-types';

export const fillObject = <T, V>(dto: ClassConstructor<T>, plainObject: V) => {
  return plainToInstance(dto, plainObject, { excludeExtraneousValues: true });
};

export const getMongoConnectionString = ({
  dbName,
  dbHost,
  dbPort,
  dbUser,
  dbPassword,
  dbAuthBase,
}: IMongoDbConfig): string => {
  return `mongodb://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}?authSource=${dbAuthBase}`;
};
