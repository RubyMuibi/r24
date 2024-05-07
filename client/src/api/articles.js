import axios from "axios";
import logger from "@/utils/logger.util";

const apiUrl = import.meta.env.VITE_API_URL;

export const get = async () => {
  try {
    const response = await axios.get(`${apiUrl}/articles`);
    const responseData = await response.data;

    return responseData;
  } catch (error) {
    logger.error(error);
    throw error;
  }
};
