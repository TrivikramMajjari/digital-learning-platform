import axios from 'axios';
import { getToken } from '../utils/axiosConfig';

const API_URL = '/api/assignments/';

const getAssignments = async () => {
    const response = await axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
    return response.data;
};

const getAssignmentById = async (id) => {
    const response = await axios.get(`${API_URL}${id}`, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
    return response.data;
};

const createAssignment = async (assignmentData) => {
    const response = await axios.post(API_URL, assignmentData, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
    return response.data;
};

const updateAssignment = async (id, assignmentData) => {
    const response = await axios.put(`${API_URL}${id}`, assignmentData, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
    return response.data;
};

const deleteAssignment = async (id) => {
    const response = await axios.delete(`${API_URL}${id}`, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
    return response.data;
};

export default {
    getAssignments,
    getAssignmentById,
    createAssignment,
    updateAssignment,
    deleteAssignment
};