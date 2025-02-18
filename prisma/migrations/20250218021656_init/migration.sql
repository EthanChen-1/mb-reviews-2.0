-- CreateTable
CREATE TABLE "Mouse" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "rank" INTEGER NOT NULL,

    CONSTRAINT "Mouse_pkey" PRIMARY KEY ("id")
);
