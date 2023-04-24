import { supabase } from "../supabase/client";
import {
  InsertUserResponse,
  SignUpUserResponse,
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

export const insertUser = async (
  user: UserType
): Promise<InsertUserResponse> => {
  const { error } = await supabase.from("users").insert(user);

  return { error };
};
