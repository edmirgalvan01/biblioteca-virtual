import { AuthError, PostgrestError } from "@supabase/supabase-js";

export interface UserType {
  userType: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  licenseNumber: string;
  accessCode: string;
}

export type ResponseType =
  | {
      success: boolean;
      errors?: undefined;
    }
  | {
      success: boolean;
      errors: {
        errorAuth: AuthError | null;
        errorInsert: PostgrestError | null;
      };
    };
