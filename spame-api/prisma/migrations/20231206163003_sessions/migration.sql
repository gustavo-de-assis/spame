/*
  Warnings:

  - You are about to drop the `patients` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "patients";

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "street" VARCHAR NOT NULL,
    "houseNumber" VARCHAR NOT NULL,
    "complement" VARCHAR NOT NULL,
    "district" VARCHAR NOT NULL,
    "city" VARCHAR NOT NULL,
    "state" VARCHAR NOT NULL,

    CONSTRAINT "Address_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Administrator" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,
    "password" VARCHAR NOT NULL,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "Administrator_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "id" SERIAL NOT NULL,
    "scheduleTo" DATE NOT NULL,
    "patientId" INTEGER NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "recepcionistId" INTEGER NOT NULL,
    "diagnosis" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT '2023-11-10 19:15:10.178685'::timestamp without time zone,

    CONSTRAINT "Appointment_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Doctor" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,
    "crm" VARCHAR NOT NULL,
    "speciality" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "Doctor_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedicalRecord" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,
    "appointmentId" INTEGER NOT NULL,

    CONSTRAINT "MedicalRecord_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patient" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "birthdate" DATE NOT NULL,
    "gender" CHAR(1) NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "rg" VARCHAR,
    "mother" VARCHAR NOT NULL,
    "father" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "phone" VARCHAR NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT '2023-11-10 19:14:44.13589'::timestamp without time zone,
    "addressId" INTEGER NOT NULL,

    CONSTRAINT "Patient_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recepcionist" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,
    "password" VARCHAR NOT NULL,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "Recepcionist_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "accessLevel" INTEGER NOT NULL,

    CONSTRAINT "Role_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_crm_key" ON "Doctor"("crm");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_cpf_key" ON "Patient"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_email_key" ON "Patient"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Role_accessLevel_key" ON "Role"("accessLevel");

-- AddForeignKey
ALTER TABLE "Administrator" ADD CONSTRAINT "Administrator_fk0" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Administrator" ADD CONSTRAINT "Administrator_fk1" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_fk0" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_fk1" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_fk2" FOREIGN KEY ("recepcionistId") REFERENCES "Recepcionist"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Doctor" ADD CONSTRAINT "Doctor_fk0" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Doctor" ADD CONSTRAINT "Doctor_fk1" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MedicalRecord" ADD CONSTRAINT "MedicalRecord_fk0" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "MedicalRecord" ADD CONSTRAINT "MedicalRecord_fk1" FOREIGN KEY ("appointmentId") REFERENCES "Appointment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_fk0" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Recepcionist" ADD CONSTRAINT "Recepcionist_fk0" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Recepcionist" ADD CONSTRAINT "Recepcionist_fk1" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;
