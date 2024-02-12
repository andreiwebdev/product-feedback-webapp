import axios from "axios";

export const getFeedbacks = async ({
    pageParam = 0,
}: {
    pageParam: number;
}) => {
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
    status: string;
}) => {
    return axios
        .post(`${import.meta.env.VITE_API_URI}feedbacks`, feedback)
        .then((response) => response.data);
};

export const addComment = (
    feedbackId: string,
    comment: {
        firstName: string;
        lastName: string;
        comment: string;
    }
) => {
    const requestData = { comment };

    return axios
        .post(
            `${import.meta.env.VITE_API_URI}feedbacks/${feedbackId}/comments`,
            requestData
        )
        .then((response) => response.data);
};
