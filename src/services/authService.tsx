import axios from "axios";

export const login = async (email: string, password: string) => {
    try {
        // Send the POST request
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/login`, {
            email,
            password
        });

        return response.data; 
    } catch (error) {
        console.error("Login error:", error);
        throw error;  // Re-throw the error to let the caller handle it
    }
};
