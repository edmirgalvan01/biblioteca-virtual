import {
  AuthError,
  PostgrestError,
  Session,
  User,
  UserMetadata,
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
        errorSignUp?: AuthError | null;
        errorSignIn?: AuthError | null;
        errorSignOut?: AuthError | null;
        errorMarkAsFavorite?: PostgrestError | null;
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

export type SignInUserResponse =
  | {
      dataSignIn: any;
      errorSignIn?: undefined;
    }
  | {
      errorSignIn: never;
      dataSignIn?: undefined;
    };

export type UpdateUserResponse = {
  data:
    | {
        user: User;
      }
    | {
        user: null;
      };
  error: AuthError | null;
};

export type UserDataResponse = {
  userData: UserMetadata | undefined;
  error: AuthError | null;
};

export type SessionResponseType =
  | { data: { session: Session }; error: null }
  | { data: { session: null }; error: AuthError }
  | { data: { session: null }; error: null };
