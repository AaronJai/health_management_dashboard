'use server';

import { ID } from "node-appwrite";
import { APPOINTMENT_COLLECTION_ID, BUCKET_ID, DATABASE_ID, databases, ENDPOINT, PATIENT_COLLECTION_ID, PROJECT_ID, storage, users } from "../appwrite.config"
import { parseStringify } from "../utils";

export const createAppointment = async (appointment: CreateAppointmentParams) => {
    try {
        const newAppointment = await databases.createDocument(
            DATABASE_ID!,
            APPOINTMENT_COLLECTION_ID!,
            ID.unique(),
            appointment
          )
      
          return parseStringify(newAppointment);

    } catch (error) {
        console.log(error)
    }
}