import { ActionsTopBar, FeedbackCard } from ".";
import { Sidebar } from "../Sidebar";
import { Wrapper } from "../common";

export const SuggestionsScreen = () => {
    return (
        <div className="xl:flex xl:max-w-7xl xl:mx-auto xl:gap-[30px] xl:px-[24px] xl:h-full">
            <Sidebar />
            <div className="w-full">
                <ActionsTopBar />
                <Wrapper extraClasses="h-[80vh] overflow-auto">
                    <div>
                        <FeedbackCard />
                        <FeedbackCard />
                        <FeedbackCard />
                        <FeedbackCard />
                        <FeedbackCard />
                        <FeedbackCard />
                        <FeedbackCard />
                        <FeedbackCard />
                        <FeedbackCard />
                        <FeedbackCard />
                    </div>
                </Wrapper>
            </div>
        </div>
    );
};
