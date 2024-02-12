import { SectionTitle } from "../common";

export const CommentsSection = (props: {
    commentsCount: number;
    comments:
        | {
              firstName: string;
              lastName: string;
              comment: string;
          }[];
}) => {
    return (
        <div className="bg-white rounded-[10px] p-[24px] mb-[24px]">
            <SectionTitle text={`${props.commentsCount} Comments`} />
            {props.comments?.map(
                (
                    commentData: {
                        firstName: string;
                        lastName: string;
                        comment: string;
                    },
                    index: number
                ) => (
                    <div
                        key={index}
                        className="border-b last:border-b-0 last:mb-0 pb-[24px] mb-[24px] last:pb-0"
                    >
                        <div className="flex items-center justify-between mb-[16px]">
                            <div className="flex items-center gap-[16px]">
                                <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center uppercase font-semibold bg-purple text-white">
                                    {commentData.firstName[0]}
                                </div>
                                <div>
                                    <h4 className="text-darkNavy text-[13px] font-bold -tracking-[0.181] md:text-[14px]">
                                        {commentData.firstName}{" "}
                                        {commentData.lastName}
                                    </h4>
                                    <p className="text-lightNavy text-[13px] md:text-[14px]">
                                        @{commentData.firstName.toLowerCase()}.
                                        {commentData.lastName.toLowerCase()}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="text-lightNavy text-[13px] md:text-[15px] md:ml-[54px]">
                            {commentData.comment}
                        </p>
                    </div>
                )
            )}
            {/* comment with replies */}
            {/* <div className="border-b last:border-b-0 last:mb-0 pb-[24px] mb-[24px] last:pb-0">
                <div className="flex items-center justify-between mb-[16px]">
                    <div className="flex items-center gap-[16px]">
                        <img
                            src={ProfileImagePlaceholder}
                            alt="profile picture"
                            className="w-[40px] h-[40px] rounded-full"
                        />
                        <div>
                            <h4 className="text-darkNavy text-[13px] font-bold -tracking-[0.181] md:text-[14px]">
                                Elijah Moss
                            </h4>
                            <p className="text-lightNavy text-[13px] md:text-[14px]">
                                @hexagon.bestagon
                            </p>
                        </div>
                    </div>
                    <div className="text-blue text-[13px] font-semibold cursor-pointer">
                        Reply
                    </div>
                </div>
                <p className="text-lightNavy text-[13px] md:text-[15px] md:ml-[54px]">
                    Also, please allow styles to be applied based on system
                    preferences. I would love to be able to browse Frontend
                    Mentor in the evening after my device’s dark mode turns on
                    without the bright background it currently has.
                </p>
                reply to comment
                <div className="border-l mb-[24px]">
                    <div className="last:mb-0 last:pb-0 pb-[24px] mt-[24px] pl-[24px]">
                        <div className="flex items-center justify-between mb-[16px]">
                            <div className="flex items-center gap-[16px]">
                                <img
                                    src={ProfileImagePlaceholder}
                                    alt="profile picture"
                                    className="w-[40px] h-[40px] rounded-full"
                                />
                                <div>
                                    <h4 className="text-darkNavy text-[13px] font-bold -tracking-[0.181] md:text-[14px]">
                                        Elijah Moss
                                    </h4>
                                    <p className="text-lightNavy text-[13px] md:text-[14px]">
                                        @hexagon.bestagon
                                    </p>
                                </div>
                            </div>
                            <div className="text-blue text-[13px] font-semibold cursor-pointer">
                                Reply
                            </div>
                        </div>
                        <p className="text-lightNavy text-[13px] md:text-[15px] md:ml-[54px]">
                            Also, please allow styles to be applied based on
                            system preferences. I would love to be able to
                            browse Frontend Mentor in the evening after my
                            device’s dark mode turns on without the bright
                            background it currently has.
                        </p>
                    </div>
                    <div className="last:mb-0 last:pb-0 pb-[24px] mt-[24px] pl-[24px]">
                        <div className="flex items-center justify-between mb-[16px]">
                            <div className="flex items-center gap-[16px]">
                                <img
                                    src={ProfileImagePlaceholder}
                                    alt="profile picture"
                                    className="w-[40px] h-[40px] rounded-full"
                                />
                                <div>
                                    <h4 className="text-darkNavy text-[13px] font-bold -tracking-[0.181] md:text-[14px]">
                                        Elijah Moss
                                    </h4>
                                    <p className="text-lightNavy text-[13px] md:text-[14px]">
                                        @hexagon.bestagon
                                    </p>
                                </div>
                            </div>
                            <div className="text-blue text-[13px] font-semibold cursor-pointer">
                                Reply
                            </div>
                        </div>
                        <p className="text-lightNavy text-[13px] md:text-[15px] md:ml-[54px]">
                            Also, please allow styles to be applied based on
                            system preferences. I would love to be able to
                            browse Frontend Mentor in the evening after my
                            device’s dark mode turns on without the bright
                            background it currently has.
                        </p>
                    </div>
                </div>
            </div> */}
        </div>
    );
};
