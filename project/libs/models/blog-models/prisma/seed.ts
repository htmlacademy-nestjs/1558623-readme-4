import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

export const fillDb = async () => {
  await prismaClient.user.upsert({
    where: { id: 'aaa1' },
    update: {},
    create: {
      id: 'aaa1',
    },
  });
  await prismaClient.user.upsert({
    where: { id: 'aaa2' },
    update: {},
    create: {
      id: 'aaa2',
    },
  });
  await prismaClient.user.upsert({
    where: { id: 'aaa3' },
    update: {},
    create: {
      id: 'aaa3',
      posts: {
        create: {
          id: 1,
          type: 'TEXT',
          textContent: 'This is a first post',
          preview: 'First post',
          tagsList: ['#first', '#post'],
          comments: {
            createMany: {
              data: [
                {
                  id: 1,
                  commentText: 'Nice post',
                  authorId: 'aaa1',
                },
                {
                  id: 2,
                  commentText: 'No, its a bad post',
                  authorId: 'aaa2',
                },
              ],
            },
          },
        },
      },
    },
  });
};

fillDb()
  .then(async () => {
    await prismaClient.$disconnect();
  })
  .catch(async (err) => {
    console.log(err);
    await prismaClient.$disconnect();
    process.exit(1);
  });
