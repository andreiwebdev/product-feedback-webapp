import { Wrapper } from "../common";
import { FeedbackCard } from "../SuggestionsScreen";
import { ActionsBar, AddCommentSection, CommentsSection } from ".";

export const FeedbackDetailScreen = () => {
    return (
        <Wrapper extraClasses="pt-[24px]">
            <ActionsBar />
            <FeedbackCard />
            <CommentsSection />
            <AddCommentSection />
        </Wrapper>
    );
};
