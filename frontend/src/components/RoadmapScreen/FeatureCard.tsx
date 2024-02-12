import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import CommentsIcon from "../../assets/shared/icon-comments.svg";
import { useNavigate } from "react-router-dom";
import { useUpdateVote } from "../../hooks";

export const FeatureCard = (props: {
    id: string;
    title: string;
    description: string;
    category: string;
    upvotes: number;
    comments: number;
    status: string;
    color?: string;
}) => {
    const navigate = useNavigate();
    const [voteCount, setVoteCount] = useState(props.upvotes);
    const updateVote = useUpdateVote();
    const [isUpvoted, setIsUpvoted] = useState(() => {
        const upvotedFeedbacks = JSON.parse(
            localStorage.getItem("upvotedFeedbacks") || "{}"
        );
        return !!upvotedFeedbacks[props.id];
    });

    const handleVote = () => {
        const newVoteCount = isUpvoted ? voteCount - 1 : voteCount + 1;
        updateVote.mutate(
            { feedbackId: props.id, vote: isUpvoted ? -1 : 1 },
            {
                onSuccess: () => {
                    const newIsUpvoted = !isUpvoted;
                    setIsUpvoted(newIsUpvoted);
                    // Update localStorage
                    const upvotedFeedbacks = JSON.parse(
                        localStorage.getItem("upvotedFeedbacks") || "{}"
                    );
                    if (newIsUpvoted) {
                        upvotedFeedbacks[props.id] = true;
                    } else {
                        delete upvotedFeedbacks[props.id];
                    }
                    localStorage.setItem(
                        "upvotedFeedbacks",
                        JSON.stringify(upvotedFeedbacks)
                    );
                    setVoteCount(newVoteCount); // Update voteCount state
                },
            }
        );
    };

    useEffect(() => {
        // Fetch isUpvoted value from localStorage when component mounts
        const upvotedFeedbacks = JSON.parse(
            localStorage.getItem("upvotedFeedbacks") || "{}"
        );
        setIsUpvoted(!!upvotedFeedbacks[props.id]); // Set isUpvoted based on localStorage data
        setVoteCount(props.upvotes); // Set voteCount based on props data
    }, [props.id]); // Run the effect only when the id changes or component mounts

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
                    onClick={handleVote}
                    className={`bg-grey rounded-[10px] text-darkNavy hover:bg-lighterBlue w-fit px-[16px] py-[5px] cursor-pointer text-[13px] font-semibold last:mb-0 flex items-center group gap-[8px] ${
                        isUpvoted ? "!bg-blue !text-white" : ""
                    }`}
                >
                    <FaAngleUp
                        className={`group-active:text-white ${
                            isUpvoted ? "text-white" : "text-blue"
                        }`}
                    />{" "}
                    <span>{voteCount}</span>
                </div>
                <div
                    onClick={() => navigate(`/feedbacks/${props.id}`)}
                    className="cursor-pointer"
                >
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
