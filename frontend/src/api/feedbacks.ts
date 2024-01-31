import axios from "axios";

export const getFeedbacks = () => {
    return axios
        .get(`${import.meta.env.VITE_API_URI}feedbacks`)
        .then((response) => response.data);
};

export const createFeedback = (feedback: {
    title: string;
    category: string;
    description: string;
    upvotes: number;
    comments: string[];
}) => {
    return axios
        .post(`${import.meta.env.VITE_API_URI}feedbacks`, feedback)
        .then((response) => response.data);
};
