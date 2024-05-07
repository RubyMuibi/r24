import axios from "axios";
import logger from "@/utils/logger.util";

const apiUrl = import.meta.env.VITE_API_URL;

export const get = async (userId) => {
  try {
    const response = await axios.get(`${apiUrl}/users/${userId}`);
    const responseData = await response.data;

    return responseData;
  } catch (error) {
    logger.error(error);
    throw error;
  }
};

export const post = async (email, otp) => {
  try {
    const response = await axios.post(`${apiUrl}/users`, { email, otp });
    const responseData = await response.data;

    return responseData;
  } catch (error) {
    logger.error(error);
    throw error;
  }
};
