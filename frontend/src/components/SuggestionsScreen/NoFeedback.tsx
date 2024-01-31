import { useNavigate } from "react-router-dom";
import NoFeedBackImage from "../../assets/suggestions/illustration-empty.svg";

export const NoFeedback = () => {
    const navigate = useNavigate();

    const handleAddFeedback = () => {
        navigate("/add-feedback");
    };

    return (
        <div className="bg-white rounded-[10px] py-[76px] px-[25px] flex flex-col items-center justify-center text-center md:py-[110px] md:px-[140px] xl:px-[209px]">
            <img
                className="mb-[39px] md:w-[129px] md:mb-[53px]"
                src={NoFeedBackImage}
                alt="No feedback yet"
            />
            <h3 className="text-darkNavy text-[18px] font-bold -tracking-[0.25px] mb-[14px] md:text-[24px] md:mb-[16px]">
                There is no feedback yet.
            </h3>
            <p className="text-lightNavy text-[13px] mb-[24px] md:text-[16px] md:mb-[48px]">
                Got a suggestion? Found a bug that needs to be squashed? We love
                hearing about new ideas to improve our app.
            </p>
            <div
                onClick={handleAddFeedback}
                className="bg-purple rounded-[10px] text-white px-[16px] py-[10px] text-[13px] font-bold cursor-pointer w-fit md:text-[14px] md:py-[12px] md:px-[24px]"
            >
                + Add Feedback
            </div>
        </div>
    );
};
