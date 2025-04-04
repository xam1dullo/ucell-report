-- CreateTable
CREATE TABLE "Ucell" (
    "id" SERIAL NOT NULL,
    "region" TEXT NOT NULL,
    "item" INTEGER NOT NULL,
    "units" INTEGER NOT NULL,
    "subscribers" INTEGER NOT NULL,

    CONSTRAINT "Ucell_pkey" PRIMARY KEY ("id")
);
