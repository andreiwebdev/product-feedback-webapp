import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import CommentsIcon from "../../assets/shared/icon-comments.svg";

export const FeatureCard = (props: {
    title: string;
    description: string;
    category: string;
    upvotes: number;
    comments: number;
    status: string;
    color: string;
}) => {
    const [isUpvoted, setIsUpvoted] = useState(false);

    return (
        <div
            className="mb-[16px] md:mb-[24px] last:mb-0 py-[22px] px-[24px] bg-white rounded-[10px] border-t-[6px]"
            style={{ borderColor: props.color }}
        >
            <div className="flex items-center gap-[8px] mb-[16px]">
                <div
                    className="w-[8px] h-[8px] rounded-full"
                    style={{ backgroundColor: props.color }}
                ></div>
                <div className="text-[13px] text-lightNavy">{props.status}</div>
            </div>
            <h4 className="text-darkNavy text-[13px] font-bold -tracking-[0.181px] mb-[9px]">
                {props.title}
            </h4>
            <p className="text-lightNavy text-[13px] mb-[8px]">
                {props.description}
            </p>
            <div className="bg-grey rounded-[10px] text-blue hover:bg-lighterBlue w-fit px-[16px] py-[5px] cursor-pointer text-[13px] font-semibold mb-[16px]">
                {props.category}
            </div>
            <div className="flex items-center justify-between md:order-1">
                <div
                    onClick={() => setIsUpvoted(!isUpvoted)}
                    className={`bg-grey rounded-[10px] text-darkNavy hover:bg-lighterBlue w-fit px-[16px] py-[5px] cursor-pointer text-[13px] font-semibold last:mb-0 flex items-center group gap-[8px] ${
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
                <div className="">
                    <div className="flex items-center gap-[8px]">
                        <img src={CommentsIcon} alt="comment icon" />
                        <div className="text-darkNavy text-[13px] font-bold -tracking-[0.181px] ">
                            {props.comments}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
