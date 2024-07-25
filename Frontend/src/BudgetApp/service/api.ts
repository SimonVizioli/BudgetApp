import axios from "axios";

const apiUrl = "http://localhost:3000/";

export const getAllResources = async (resource: string) => {
    try {
        const response = await axios.get(`${apiUrl}/${resource}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching:", error);
    }
};

export const getResourceById = async (resource: string, id: string) => {
    try {
        const response = await axios.get(`${apiUrl}/${resource}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching:", error);
    }
};

export const deleteResource = async (resource: string, id: string) => {
    try {
        const response = await axios.delete(`${apiUrl}/${resource}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching:", error);
    }
};

export const saveResource = async (resource: string, id: string) => {
    if (id) {
        try {
            const response = await axios.put(`${apiUrl}/${resource}/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching:", error);
        }
    } else {
        try {
            const response = await axios.post(`${apiUrl}/${resource}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching:", error);
        }
    }
};
