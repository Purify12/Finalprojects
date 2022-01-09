import {
    WEBINAR_CREATE_FAIL,
    WEBINAR_CREATE_REQUEST,
    WEBINAR_CREATE_SUCCESS,
    WEBINAR_DELETE_FAIL,
    WEBINAR_DELETE_REQUEST,
    WEBINAR_DELETE_SUCCESS,
    WEBINAR_LIST_FAIL,
    WEBINAR_LIST_REQUEST,
    WEBINAR_LIST_SUCCESS,
    WEBINAR_UPDATE_FAIL,
    WEBINAR_UPDATE_REQUEST,
    WEBINAR_UPDATE_SUCCESS,
  } from "../constants/webinarConstants";
  import axios from "axios";

  export const listWebinar = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: WEBINAR_LIST_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.get(`/api/webinar`, config);
  
      dispatch({
        type: WEBINAR_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: WEBINAR_LIST_FAIL,
        payload: message,
      });
    }
  };
  
  export const createWebinarAction = (title, content, category) => async (
    dispatch,
    getState
  ) => {
    try {
      dispatch({
        type: WEBINAR_CREATE_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.post(
        `/api/webinar/create`,
        { title, content, category },
        config
      );
  
      dispatch({
        type: WEBINAR_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: WEBINAR_CREATE_FAIL,
        payload: message,
      });
    }
  };
  
  export const deleteWebinarAction = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: WEBINAR_DELETE_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.delete(`/api/webinar/${id}`, config);
  
      dispatch({
        type: WEBINAR_DELETE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: WEBINAR_DELETE_FAIL,
        payload: message,
      });
    }
  };
  
  export const updateWebinarAction = (id, title, content, category) => async (
    dispatch,
    getState
  ) => {
    try {
      dispatch({
        type: WEBINAR_UPDATE_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.put(
        `/api/webinar/${id}`,
        { title, content, category },
        config
      );
  
      dispatch({
        type: WEBINAR_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: WEBINAR_UPDATE_FAIL,
        payload: message,
      });
    }
  };
  