import { useReducer } from "react";
import type { Email } from "~/types/email";

enum ActionTypes {
  ADD_EMAIL = "ADD_EMAIL",
  EDIT_EMAIL = "EDIT_EMAIL",
  DELETE_EMAIL = "DELETE_EMAIL",
  SET_EMAILS = "SET_EMAILS",
}

type EmailAction = {
  type: ActionTypes;
  payload: Partial<Email>;
};

type EmailsAction = {
  type: ActionTypes.SET_EMAILS;
  payload: Email[];
};

type Action = EmailAction | EmailsAction;

const emailReducer = (state: Email[], action: Action): Email[] => {
  switch (action.type) {
    case ActionTypes.ADD_EMAIL:
      return [
        ...state,
        {
          id: crypto.randomUUID(),
          ...action.payload,
        },
      ];

    case ActionTypes.EDIT_EMAIL:
      return state.map((email) =>
        email.id === action.payload.id
          ? { ...email, ...action.payload }
          : email,
      );

    case ActionTypes.DELETE_EMAIL:
      return state.filter((email) => email.id !== action.payload.id);

    case ActionTypes.SET_EMAILS:
      return [];

    default:
      return state;
  }
};

const useEmailList = (initialEmails: Email[] = []) => {
  const [emails, dispatch] = useReducer(emailReducer, initialEmails);

  const addEmail = (emailData: Omit<Email, "id">) => {
    dispatch({ type: ActionTypes.ADD_EMAIL, payload: emailData });
  };

  const editEmail = (emailData: Email) => {
    dispatch({ type: ActionTypes.EDIT_EMAIL, payload: emailData });
  };

  const deleteEmail = (id: string) => {
    dispatch({ type: ActionTypes.DELETE_EMAIL, payload: { id } });
  };

  const setEmails = (emails: Email[]) => {
    dispatch({ type: ActionTypes.SET_EMAILS, payload: emails });
  };

  return {
    emails,
    addEmail,
    editEmail,
    deleteEmail,
    setEmails,
  };
};

export default useEmailList;
