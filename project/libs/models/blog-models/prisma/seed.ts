import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

export const fillDb = async () => {
  await prismaClient.user.create({
    data: {
      id: 1,
    },
  });
};
