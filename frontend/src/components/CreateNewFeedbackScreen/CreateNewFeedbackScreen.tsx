import { CreateNewFeedbackForm } from ".";
import { SectionTitle, Wrapper } from "../common";
import { FaAngleLeft } from "react-icons/fa";
import NewFeedbackIcon from "../../assets/shared/icon-new-feedback.svg";
import { useNavigate } from "react-router-dom";

export const CreateNewFeedbackScreen = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/");
    };

    return (
        <main className="bg-lightGrey w-full h-full min-h-screen md:pt-[56px] pb-[88px]">
            <Wrapper extraClasses="pt-[34px] sm:!max-w-xl">
                <div
                    onClick={handleGoBack}
                    className="flex items-center gap-[15px] cursor-pointer mb-[55px]"
                >
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
                    <CreateNewFeedbackForm />
                </div>
            </Wrapper>
        </main>
    );
};
