import { useReducer } from "react";
import type { Email } from "~/types/email";

enum Actions {
    ADD_EMAIL = 'ADD_EMAIL',
    EDIT_EMAIL = 'EDIT_EMAIL',
    DELETE_EMAIL = 'DELETE_EMAIL',
}

type EmailAction = {
    type: Actions; 
    payload: Partial<Email>
};

function emailReducer(state: Email[], action: EmailAction): Email[] {
  switch (action.type) {
    case Actions.ADD_EMAIL:
      return [
        ...state,
        {
          id: crypto.randomUUID(),
          ...action.payload
        }
      ];
    
    case Actions.EDIT_EMAIL:
      return state.map(email => 
        email.id === action.payload.id 
          ? { ...email, ...action.payload }
          : email
      );
    
    case Actions.DELETE_EMAIL:
      return state.filter(email => email.id !== action.payload.id);
    
    default:
      return state;
  }
}

const useEmailList = (initialEmails: Email[] = []) => {
  const [emails, dispatch] = useReducer(emailReducer, initialEmails);

  const addEmail = (emailData: Omit<Email, 'id'>) => {
    dispatch({ type: Actions.ADD_EMAIL, payload: emailData });
  };

  const editEmail = (emailData: Email) => {
    dispatch({ type: Actions.EDIT_EMAIL, payload: emailData });
  };

  const deleteEmail = (id: string) => {
    dispatch({ type: Actions.DELETE_EMAIL, payload: { id } });
  };

  return {
    emails,
    addEmail,
    editEmail,
    deleteEmail,
  };
}

export default useEmailList;