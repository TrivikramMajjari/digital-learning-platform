import axios from 'axios';
import { getToken } from '../utils/axiosConfig';

const API_URL = 'http://localhost:8080/api/users/';

const userService = {
    getUserProfile: async (userId) => {
        try {
            const response = await axios.get(`${API_URL}${userId}`, {
                headers: {
                    Authorization: `Bearer ${getToken()}`
                }
            });
            return response.data;
        } catch (error) {
            throw error.response ? error.response.data : error.message;
        }
    },

    updateUserProfile: async (userId, userData) => {
        try {
            const response = await axios.put(`${API_URL}${userId}`, userData, {
                headers: {
                    Authorization: `Bearer ${getToken()}`
                }
            });
            return response.data;
        } catch (error) {
            throw error.response ? error.response.data : error.message;
        }
    },

    deleteUser: async (userId) => {
        try {
            await axios.delete(`${API_URL}${userId}`, {
                headers: {
                    Authorization: `Bearer ${getToken()}`
                }
            });
        } catch (error) {
            throw error.response ? error.response.data : error.message;
        }
    },
    
    getUserProgress: async (userId) => {
        try {
            const response = await axios.get(`${API_URL}${userId}/progress`, {
                headers: {
                    Authorization: `Bearer ${getToken()}`
                }
            });
            return response.data;
        } catch (error) {
            throw error.response ? error.response.data : error.message;
        }
    }
};

export default userService;