import { SET_CEP, SET_WINDOW, SET_ANDRESS, SET_LOCAL_STORAGE } from "../actions/actions";

const INITIAL_STATE = {};

export const database = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CEP:
      return {
        ...state,
        cep: action.payload,
      };

    case SET_ANDRESS:
      return {
        ...state,
        andress: action.payload,
      };

      case SET_WINDOW: {
        return {
          ...state,
          window: action.payload
        }
      }

      case SET_LOCAL_STORAGE: {
        return {
          ...state,
          localStorage: action.payload
        }
      }

    default:
      return state;
  }
};
