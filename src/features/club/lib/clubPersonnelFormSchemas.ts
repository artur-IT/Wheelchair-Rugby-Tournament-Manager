import {
  ClubCoachRefereeFieldsSchema,
  ClubPlayerFieldsSchema,
  ClubStaffFieldsSchema,
  ClubVolunteerFieldsSchema,
} from "@/lib/clubSchemas";

/** Form validation matches API `ClubPlayerFieldsSchema` without `clubId` (added on submit). */
export const clubPlayerFormSchema = ClubPlayerFieldsSchema.omit({ clubId: true });

export const clubCoachFormSchema = ClubCoachRefereeFieldsSchema.omit({ clubId: true });

export const clubVolunteerFormSchema = ClubVolunteerFieldsSchema.omit({ clubId: true });

export const clubRefereeFormSchema = ClubCoachRefereeFieldsSchema.omit({ clubId: true });

export const clubStaffOtherFormSchema = ClubStaffFieldsSchema.omit({ clubId: true });

/** RHF player form shape (strings for inputs; validated by `clubPlayerFormSchema` on submit). */
export interface ClubPlayerFormValues {
  firstName: string;
  lastName: string;
  classification: number;
  number: string;
  status: "ACTIVE" | "INACTIVE" | "GUEST";
  birthDate: string | null;
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
  contactCity: string;
  contactPostalCode: string;
  contactMapUrl: string;
}

/** Values kept as plain strings in RHF before Zod preprocess on submit. */
export interface ClubSimplePersonFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
