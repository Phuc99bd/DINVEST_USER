import produce from "immer";
import * as types from "./constants";
import { USER_INFO_KEY } from "commons/constants";
import { UPDATED_AVATAR } from "./constants";

const initialState = {
  userInfo: JSON.parse(localStorage.getItem(USER_INFO_KEY)) || {},
  dataOpenModalAuthy: null,
};

const updateUserInfoToLocal = (userInfo) => {
  localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo));
};

export default function AuthReducer(state = initialState, action) {
  const { payload } = action;
  return produce(state, (draft) => {
    switch (action.type) {
      case types.LOGIN_SUCCESS:
        draft.userInfo = payload;
        break;
      case UPDATED_AVATAR: {
        draft.userInfo = payload;
        updateUserInfoToLocal(payload);
        break;
      }
      case types.TOGGLE_AUTHY_MODAL: {
        draft.dataOpenModalAuthy = payload;
        break;
      }
      case types.GET_PROFILE_SUCCESS: {
        draft.userInfo = payload;
        break;
      }
      default:
        break;
    }
  });
}
