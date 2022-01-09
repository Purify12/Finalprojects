import {
  WEBINAR_UPDATE_REQUEST,
  WEBINAR_UPDATE_SUCCESS,
  WEBINAR_UPDATE_FAIL,
  WEBINAR_CREATE_FAIL,
  WEBINAR_CREATE_REQUEST,
  WEBINAR_CREATE_SUCCESS,
  WEBINAR_DELETE_FAIL,
  WEBINAR_DELETE_REQUEST,
  WEBINAR_DELETE_SUCCESS,
  WEBINAR_LIST_FAIL,
  WEBINAR_LIST_REQUEST,
  WEBINAR_LIST_SUCCESS,
} from "../constants/webinarConstants";

export const webinarListReducer = (state = { webinar: [] }, action) => {
  switch (action.type) {
    case WEBINAR_LIST_REQUEST:
      return { loading: true };
    case WEBINAR_LIST_SUCCESS:
      return { loading: false, webinar: action.payload };
    case WEBINAR_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const webinarCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case WEBINAR_CREATE_REQUEST:
      return { loading: true };
    case WEBINAR_CREATE_SUCCESS:
      return { loading: false, success: true };
    case WEBINAR_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const webinarDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case WEBINAR_DELETE_REQUEST:
      return { loading: true };
    case WEBINAR_DELETE_SUCCESS:
      return { loading: false, success: true };
    case WEBINAR_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const webinarUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case WEBINAR_UPDATE_REQUEST:
      return { loading: true };
    case WEBINAR_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case WEBINAR_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
