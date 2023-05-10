import { supabase } from "../supabase/client";
import {
  InsertUserResponse,
  SignUpUserResponse,
  UpdateUserResponse,
  UserType,
} from "../types/Users";

export const signUpUser = async (
  user: UserType
): Promise<SignUpUserResponse> => {
  const { data, error: errorSignUp } = await supabase.auth.signUp({
    email: user.email,
    password: user.password,
    options: {
      data: {
        userType: user.userType,
        name: user.name,
        lastName: user.lastName,
        licenseNumber: user.licenseNumber,
        accessCode: user.accessCode,
      },
    },
  });

  return { data, errorSignUp };
};

export const signInUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { data, error };
};

export const updateUser = async (
  user: UserType
): Promise<UpdateUserResponse> => {
  const { data, error } = await supabase.auth.updateUser({
    data: {
      userType: user.userType,
      name: user.name,
      lastName: user.lastName,
      licenseNumber: user.licenseNumber,
      accessCode: user.accessCode,
    },
  });

  return { data, error };
};
