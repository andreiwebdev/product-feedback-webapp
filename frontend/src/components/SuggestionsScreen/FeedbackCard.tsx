import { FaAngleUp } from "react-icons/fa";
import CommentsIcon from "../../assets/shared/icon-comments.svg";
import { useState } from "react";

export const FeedbackCard = (props: {
    title: string;
    category: string;
    description: string;
    upvotes: number;
    comments: number;
}) => {
    const [isUpvoted, setIsUpvoted] = useState(false);

    return (
        <div className="bg-white rounded-[10px] p-[24px] mb-[16px] last:mb-0 md:flex md:mb-[20px] md:items-start md:gap-[40px] md:relative md:py-[28px] md:px-[32px]">
            <div className="mb-[16px] md:mb-0 md:order-2 md:pr-[50px]">
                <h3 className="text-darkNavy text-[13px] font-bold -tracking-[0.181px] mb-[9px] md:text-[18px] md:-tracking-[0.25px] md:mb-[4px]">
                    {props.title}
                </h3>
                <p className="text-lightNavy text-[13px] mb-[8px] md:text-[16px] md:mb-[12px]">
                    {props.description}
                </p>
                <div className="bg-grey rounded-[10px] text-blue hover:bg-lighterBlue w-fit px-[16px] py-[5px] cursor-pointer text-[13px] font-semibold">
                    {props.category}
                </div>
            </div>
            <div className="flex items-center justify-between md:order-1">
                <div
                    onClick={() => setIsUpvoted(!isUpvoted)}
                    className={`bg-grey rounded-[10px] text-darkNavy hover:bg-lighterBlue w-fit px-[16px] py-[5px] cursor-pointer text-[13px] font-semibold last:mb-0 flex items-center group gap-[8px] md:flex-col md:px-[9px] md:pt-[14px] md:pb-[9px] ${
                        isUpvoted ? "!bg-blue !text-white" : ""
                    }`}
                >
                    <FaAngleUp
                        className={`group-active:text-white ${
                            isUpvoted ? "text-white" : "text-blue"
                        }`}
                    />{" "}
                    <span>{props.upvotes}</span>
                </div>
                <div className="md:absolute right-[32px] top-1/2 transform -translate-y-1/2">
                    <div className="flex items-center gap-[8px]">
                        <img src={CommentsIcon} alt="comment icon" />
                        <div className="text-darkNavy text-[13px] font-bold -tracking-[0.181px] md:text-[16px]">
                            {props.comments}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
