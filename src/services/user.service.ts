import { supabase } from "../supabase/client";
import { UserType } from "../types/Users";

export const signUpUser = async (user: UserType) => {
  //Verify auth user
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
