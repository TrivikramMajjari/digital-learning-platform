import axios from 'axios';
import { getToken } from '../utils/axiosConfig';

// Use the full base URL for local development
const API_URL = 'http://localhost:8080/api/courses/';

const getCourses = async () => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching courses:', error);
        throw error.response?.data || error.message;
    }
};

const getCourseById = async (courseId) => {
    try {
        const response = await axios.get(`${API_URL}${courseId}`, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching course ${courseId}:`, error);
        throw error.response?.data || error.message;
    }
};

const createCourse = async (courseData) => {
    try {
        const response = await axios.post(API_URL, courseData, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating course:', error);
        throw error.response?.data || error.message;
    }
};

const updateCourse = async (courseId, courseData) => {
    try {
        const response = await axios.put(`${API_URL}${courseId}`, courseData, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error updating course ${courseId}:`, error);
        throw error.response?.data || error.message;
    }
};

const deleteCourse = async (courseId) => {
    try {
        const response = await axios.delete(`${API_URL}${courseId}`, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error deleting course ${courseId}:`, error);
        throw error.response?.data || error.message;
    }
};

// Named constant for cleaner export
const courseService = {
    getCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse
};

export default courseService;