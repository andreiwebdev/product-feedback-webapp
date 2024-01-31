import axios from "axios";

export const getFeedbacks = async ({ pageParam = 0 }: any) => {
    const response = await axios.get(
        `${import.meta.env.VITE_API_URI}feedbacks?offset=${pageParam}`
    );
    return response.data;
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
