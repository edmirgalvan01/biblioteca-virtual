import {
  AuthError,
  PostgrestError,
  Session,
  User,
} from "@supabase/supabase-js";

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
        errorSignUp: AuthError | null;
        errorInsert: PostgrestError | null;
      };
    };

export type SignUpUserResponse = {
  data:
    | {
        user: User | null;
        session: Session | null;
      }
    | {
        user: null;
        session: null;
      };
  errorSignUp: AuthError | null;
};

export type InsertUserResponse = {
  error: PostgrestError | null;
};
