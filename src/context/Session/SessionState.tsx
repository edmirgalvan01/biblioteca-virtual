import { useReducer } from "react";
import { SessionReducer } from "./SessionReducer";
import { SessionContext } from "./SessionContext";

interface Props {
  children: JSX.Element;
}

export const SessionState = ({ children }: Props) => {
  const initialState = {};

  const [session, dispatch] = useReducer(SessionReducer, initialState);

  const getSession = () => {};

  return (
    <SessionContext.Provider
      value={{
        session: session,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
