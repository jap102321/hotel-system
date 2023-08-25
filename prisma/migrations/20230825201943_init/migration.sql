-- CreateTable
CREATE TABLE "Hotel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "location" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Room" (
    "roomNumber" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "hotelId" INTEGER NOT NULL,
    "roomType" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "taxes" DECIMAL NOT NULL,
    "image" TEXT NOT NULL,
    CONSTRAINT "Room_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Reservation" (
    "reservationNumber" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "totalPrice" DECIMAL NOT NULL,
    "paymentDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "clientName" TEXT,
    "roomId" INTEGER,
    CONSTRAINT "Reservation_clientName_fkey" FOREIGN KEY ("clientName") REFERENCES "Client" ("name") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Reservation_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room" ("roomNumber") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Client" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "document" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Guest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "dateOfBirth" DATETIME NOT NULL,
    "documentType" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "contactPhone" TEXT NOT NULL,
    "roomId" INTEGER,
    CONSTRAINT "Guest_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Reservation" ("roomId") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CofEmergency" (
    "name" TEXT NOT NULL PRIMARY KEY,
    "phone" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Worker" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_clientName_key" ON "Reservation"("clientName");

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_roomId_key" ON "Reservation"("roomId");

-- CreateIndex
CREATE UNIQUE INDEX "Client_name_key" ON "Client"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Guest_roomId_key" ON "Guest"("roomId");