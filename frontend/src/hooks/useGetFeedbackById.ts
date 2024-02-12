import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetFeedbackById = (id: string) => {
    return useQuery({
        queryKey: ["feedbackById", id],
        queryFn: async () => {
            const res = await axios.get(
                `${import.meta.env.VITE_API_URI}feedbacks/${id}`
            );
            return res.data;
        },
    });
};
