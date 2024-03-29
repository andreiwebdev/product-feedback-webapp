import { Loading, Wrapper } from "../common";
import { FeedbackCard } from "../SuggestionsScreen";
import { ActionsBar, AddCommentSection, CommentsSection } from ".";
import { useParams } from "react-router-dom";
import { useGetFeedbackById } from "../../hooks";

export const FeedbackDetailScreen = () => {
    const { id } = useParams();
    const { data: feedbackData, isLoading } = useGetFeedbackById(id ?? "");

    if (isLoading) {
        return (
            <div className="bg-lightGrey flex justify-center items-center h-screen">
                <Loading />
            </div>
        );
    }

    return (
        <Wrapper extraClasses="pt-[24px]">
            <ActionsBar />
            <FeedbackCard
                id={feedbackData?._id}
                title={feedbackData?.title}
                category={feedbackData?.category}
                description={feedbackData?.description}
                upvotes={feedbackData?.upvotes}
                comments={feedbackData?.comments.length}
            />
            <CommentsSection
                comments={feedbackData?.comments}
                commentsCount={feedbackData?.comments.length}
            />
            <AddCommentSection feedbackId={feedbackData?._id} />
        </Wrapper>
    );
};
