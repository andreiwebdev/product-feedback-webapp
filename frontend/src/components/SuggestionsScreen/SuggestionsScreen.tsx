import { ActionsTopBar, FeedbackCard } from ".";
import { Sidebar } from "../Sidebar";
import { Loading, Wrapper } from "../common";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getFeedbacks } from "../../api/feedbacks";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const SuggestionsScreen = () => {
    const { ref, inView } = useInView();

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ["feedbacks"],
        queryFn: getFeedbacks,
        initialPageParam: 0,
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.length === 0) return undefined;
            return pages.length * 10;
        },
    });

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);

    useEffect(() => {
        // Trigger an initial load if the end of the list is already in view
        // (happens in cases of large screens or less initial data)
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, []);

    if (status === "pending")
        return (
            <div className="bg-white w-full h-screen flex items-center justify-center">
                <Loading />
            </div>
        );
    if (status === "error") return <div>{JSON.stringify(error)}</div>;

    return (
        <div className="xl:flex xl:max-w-7xl xl:mx-auto xl:gap-[30px] xl:px-[24px] xl:h-full">
            <Sidebar />
            <div className="w-full">
                <ActionsTopBar />
                <Wrapper>
                    {data.pages.map((pages, i) => (
                        <React.Fragment key={i}>
                            {pages.map(
                                (
                                    feedback: {
                                        _id: string;
                                        title: string;
                                        category: string;
                                        description: string;
                                        upvotes: number;
                                        comments: { length: number };
                                    },
                                    key: number
                                ) => {
                                    if (pages.length === key + 1) {
                                        return (
                                            <FeedbackCard
                                                key={feedback._id}
                                                id={feedback._id}
                                                ref={ref}
                                                title={feedback.title}
                                                category={feedback.category}
                                                description={
                                                    feedback.description
                                                }
                                                upvotes={feedback.upvotes}
                                                comments={
                                                    feedback.comments.length
                                                }
                                            />
                                        );
                                    } else {
                                        return (
                                            <FeedbackCard
                                                key={feedback._id}
                                                id={feedback._id}
                                                title={feedback.title}
                                                category={feedback.category}
                                                description={
                                                    feedback.description
                                                }
                                                upvotes={feedback.upvotes}
                                                comments={
                                                    feedback.comments.length
                                                }
                                            />
                                        );
                                    }
                                }
                            )}
                        </React.Fragment>
                    ))}
                    {isFetchingNextPage && (
                        <div className="flex items-center justify-center py-8">
                            <Loading />
                        </div>
                    )}
                </Wrapper>
            </div>
        </div>
    );
};
