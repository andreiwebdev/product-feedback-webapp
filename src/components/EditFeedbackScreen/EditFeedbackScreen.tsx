import { FaAngleLeft } from "react-icons/fa";
import { SectionTitle, Wrapper } from "../common";
import EditFeedbackIcon from "../../assets/shared/icon-edit-feedback.svg";
import { EditFeedbackForm } from ".";

export const EditFeedbackScreen = () => {
    return (
        <div>
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
                        src={EditFeedbackIcon}
                        alt="new feedback icon"
                    />
                    <SectionTitle text="Editing 'Add a dark theme option'" />
                    <EditFeedbackForm />
                </div>
            </Wrapper>
        </div>
    );
};
