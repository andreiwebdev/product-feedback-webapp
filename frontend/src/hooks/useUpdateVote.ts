import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

type UpdateVoteParams = {
    feedbackId: string;
    vote: number;
};

type Feedback = {
    _id: string;
    upvotes: number;
};

export const useUpdateVote = () => {
    const queryClient = useQueryClient();

    return useMutation<AxiosResponse<Feedback>, Error, UpdateVoteParams>({
        mutationFn: ({ feedbackId, vote }) => {
            console.log(feedbackId, vote);
            return axios.patch(
                `${import.meta.env.VITE_API_URI}feedbacks/${feedbackId}/vote`,
                { vote }
            );
        },

        onMutate: async ({ feedbackId, vote }) => {
            // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
            await queryClient.cancelQueries({
                queryKey: ["feedbacks", feedbackId],
            });

            // Snapshot the previous value
            const previousFeedback = queryClient.getQueryData<Feedback>([
                "feedbacks",
                feedbackId,
            ]);

            // Optimistically update to the new value
            if (previousFeedback) {
                queryClient.setQueryData<Feedback>(["feedbacks", feedbackId], {
                    ...previousFeedback,
                    upvotes: previousFeedback.upvotes + vote,
                });
            }

            return { previousFeedback };
        },

        onError: (err: any, variables, context: any) => {
            // Rollback on error
            if (context?.previousFeedback) {
                queryClient.setQueryData(
                    ["feedbacks", variables.feedbackId],
                    context.previousFeedback
                );
            }
            console.log(err);
        },

        onSettled: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({
                queryKey: ["feedbacks"],
            });
        },
    });
};
