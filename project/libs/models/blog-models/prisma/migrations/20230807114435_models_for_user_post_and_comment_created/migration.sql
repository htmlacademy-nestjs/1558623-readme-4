-- CreateEnum
CREATE TYPE "PostType" AS ENUM ('LINK', 'PHOTO', 'QUOTE', 'TEXT', 'VIDEO');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" SERIAL NOT NULL,
    "comment_text" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "post_id" INTEGER NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "posts" (
    "id" SERIAL NOT NULL,
    "type" "PostType" NOT NULL,
    "post_author_id" TEXT NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "likes_count" INTEGER NOT NULL DEFAULT 0,
    "tags_list" TEXT[],
    "title" TEXT,
    "description" TEXT,
    "url" TEXT,
    "text_content" TEXT,
    "quote_author" TEXT,
    "preview" TEXT,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "comments_id_key" ON "comments"("id");

-- CreateIndex
CREATE UNIQUE INDEX "comments_author_id_key" ON "comments"("author_id");

-- CreateIndex
CREATE UNIQUE INDEX "posts_id_key" ON "posts"("id");

-- CreateIndex
CREATE UNIQUE INDEX "posts_post_author_id_key" ON "posts"("post_author_id");

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_post_author_id_fkey" FOREIGN KEY ("post_author_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
