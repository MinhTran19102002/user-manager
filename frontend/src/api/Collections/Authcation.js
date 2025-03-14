import axiosClient from "../axiosClient";

export const login = async (userData) => {
    try {
        const response = await axiosClient.post('/login', userData);
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};

export const registerUser = async (userData) => {
    try {
        const response = await axiosClient.post(`/register`, userData);
        return response.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
};

export const logout = async () => {
    try {
        const response = await axiosClient.post(`/logout`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
};

export const checkToken = async () => {
    try {
        const response = await axiosClient.get(`/check-auth`);
        return response;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
};

export const getAllUser = async () => {
    try {
        const response = await axiosClient.get("/getAllUser");
        return response.data;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
};

export const updateUser = async (updatedData) => {
    try {
        const response = await axiosClient.put(`/users`, updatedData);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error updating user:", error);
    }
};

export const updateUserByAdmin = async (updatedData) => {
    try {
        const response = await axiosClient.put(`/usersByAdmin`, updatedData);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error updating user:", error);
    }
};




export const deleteUser = async (email) => {
    try {
        const response = await axiosClient.delete(`/users/${email}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error updating user:", error);
    }
};