import { ActionsTopBar, FeedbackCard, NoFeedback } from ".";
import { Sidebar } from "../Sidebar";
import { Wrapper } from "../common";
import { useQuery } from "@tanstack/react-query";
import { getFeedbacks } from "../../api/feedbacks";

export const SuggestionsScreen = () => {
    const {
        status,
        error,
        data: feedbacks,
    } = useQuery({
        queryKey: ["feedbacks"],
        queryFn: getFeedbacks,
    });

    if (status === "pending") return <div>Loading...</div>;
    if (status === "error") return <div>{JSON.stringify(error)}</div>;

    return (
        <div className="xl:flex xl:max-w-7xl xl:mx-auto xl:gap-[30px] xl:px-[24px] xl:h-full">
            <Sidebar />
            <div className="w-full">
                <ActionsTopBar />
                <Wrapper extraClasses="h-[80vh] overflow-auto">
                    {feedbacks?.length ? (
                        feedbacks?.map((feedback: any) => (
                            <FeedbackCard
                                key={feedback._id}
                                title={feedback.title}
                                category={feedback.category}
                                description={feedback.description}
                                upvotes={feedback.upvotes}
                                comments={feedback.comments.length}
                            />
                        ))
                    ) : (
                        <NoFeedback />
                    )}
                </Wrapper>
            </div>
        </div>
    );
};
