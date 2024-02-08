import { useQuery } from "@tanstack/react-query"
import axios from "axios";

export const useGetFeedbacksCount = () => {
    return useQuery({
        queryKey: ["feedbacksCount"],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URI}feedbacks/count`);
            return res.data.count;
        },
    });
}