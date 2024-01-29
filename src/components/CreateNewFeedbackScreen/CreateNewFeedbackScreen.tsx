import { CreateNewFeedbaackForm } from ".";
import { SectionTitle, Wrapper } from "../common";
import { FaAngleLeft } from "react-icons/fa";
import NewFeedbackIcon from "../../assets/shared/icon-new-feedback.svg";

export const CreateNewFeedbackScreen = () => {
    return (
        <Wrapper extraClasses="pt-[34px] sm:!max-w-xl">
            <div className="flex items-center gap-[15px] cursor-pointer mb-[55px]">
                <FaAngleLeft className="text-blue" />
                <div className="text-lightNavy text-[13px] font-bold md:text-[14px]">
                    Go Back
                </div>
            </div>
            <div className="bg-white rounded-[10px] p-[24px] pt-[44px] relative md:p-[42px] md:pt-[52px]">
                <img
                    className="absolute left-[24px] -top-[20px] w-[40px] h-[40px]"
                    src={NewFeedbackIcon}
                    alt="new feedback icon"
                />
                <SectionTitle text="Create New Feedback" />
                <CreateNewFeedbaackForm />
            </div>
        </Wrapper>
    );
};
