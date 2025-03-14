import axios from "axios";
import { resources_EN } from "./componentUtils";

export const PostService = async (url, payload, callback = () => {}) => {
  try {
    const response = await axios.post(url, payload, {
      headers: { "Content-Type": "application/json" },
    });
    console.log("Response", response);
    if (response.data.success) {
      callback(
        resources_EN.success,
        resources_EN.successTitle,
        response.data.success,
        response
      );
    } else {
      callback(
        resources_EN.error,
        resources_EN.errorTitle,
        response.data.error
      );
    }
  } catch (e) {
    console.log("Error", e);
  }
};

export const PostServiceWithFile = async (
  url,
  payload,
  callback = () => {}
) => {
  try {
    const response = await axios.post(url, payload, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log("Response", response);
    if (response.data.success) {
      callback(
        resources_EN.success,
        resources_EN.successTitle,
        response.data.success,
        response
      );
    } else {
      callback(
        resources_EN.error,
        resources_EN.errorTitle,
        response.data.error
      );
    }
  } catch (e) {
    console.log("Error", e);
  }
};

export const getService = async (url, payload, callback = () => {}) => {
  try {
    const response = await axios.post(url, payload, {
      headers: { "Content-Type": "application/json" },
    });
    console.log("Response", response);
    if (response.data) {
      callback(response.data);
    }
  } catch (e) {
    console.log("Error", e);
  }
};
