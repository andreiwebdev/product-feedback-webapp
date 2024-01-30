import { FaAngleLeft } from "react-icons/fa";

export const ActionsBar = () => {
    return (
        <div className="flex items-center justify-between mb-[24px]">
            <div className="flex items-center gap-[15px] cursor-pointer">
                <FaAngleLeft className="text-blue" />
                <div className="text-lightNavy text-[13px] font-bold md:text-[14px]">
                    Go Back
                </div>
            </div>
            <div className="bg-blue hover:bg-[#7C91F9] rounded-[10px] text-white px-[16px] py-[10px] text-[13px] font-bold cursor-pointer w-fit md:text-[14px] md:py-[12px] md:px-[24px] transition-colors">
                Edit Feedback
            </div>
        </div>
    );
};
