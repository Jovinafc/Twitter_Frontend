import axios from "axios";

export const getTweets = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/tweets`)

        return response.data
    } catch (error) {
        console.error("Login error:", error);
        throw error;  // Re-throw the error to let the caller handle it
    }
}