import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetFeedbacksCountByStatus = () => {
    return useQuery({
        queryKey: ['feedbacksCountByStatus'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URI}feedbacks/status-count`);
            return res.data;
        }
    })
}