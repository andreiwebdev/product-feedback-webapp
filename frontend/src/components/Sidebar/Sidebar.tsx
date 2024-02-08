import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Wrapper } from "../common";
import { useGetFeedbacksCountByStatus } from "../../hooks";

export const Sidebar = () => {
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
    const { data: feedbacksCountByStatus } = useGetFeedbacksCountByStatus();

    return (
        <div className="container mx-auto md:px-[24px] xl:px-0 xs:px-0 sm:max-w-3xl xl:max-w-[20%] xl:mx-0 md:flex md:gap-[10px] xl:block md:mb-[40px] xl:mb-0">
            <div
                className="h-[72px] flex flex-col items-center justify-center md:h-[201px] md:rounded-[10px] md:justify-end md:py-[24px] md:w-[380px] xl:w-full xl:px-[24px] xl:mb-[24px]"
                style={{
                    background:
                        "radial-gradient(166.82% 166.82% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)",
                }}
            >
                <Wrapper extraClasses="flex items-center justify-between text-white">
                    <div>
                        <div className="text-[15px] font-bold -tracking-[0.187] md:text-[20px] md:-tracking-[0.25px]">
                            Frontend Mentor
                        </div>
                        <div className="text-[13px] font-medium opacity-75 md:text-[15px]">
                            FeedBack Board
                        </div>
                    </div>
                    {!toggleMobileMenu ? (
                        <GiHamburgerMenu
                            onClick={() => setToggleMobileMenu(true)}
                            className="text-[30px] text-white cursor-pointer md:hidden"
                        />
                    ) : (
                        <IoClose
                            onClick={() => setToggleMobileMenu(false)}
                            className="text-[30px] text-white cursor-pointer md:hidden"
                        />
                    )}
                </Wrapper>
            </div>
            <div
                className={`absolute top-[72px] left-0 bg-[rgba(0,0,0,0.5)] w-full h-screen md:block md:static md:bg-transparent md:h-[201px] ${
                    toggleMobileMenu ? "flex justify-end" : "hidden"
                }`}
            >
                <div className="bg-lightGrey w-[80%] h-screen p-[24px] md:p-0 md:w-full md:h-fit z-10">
                    <Wrapper extraClasses="md:grid md:grid-cols-2 md:p-0 md:gap-[8px] xl:flex xl:flex-col">
                        <div className="bg-white rounded-[10px] p-[24px] flex items-center gap-[8px] flex-wrap mb-[24px] md:mb-0 xl:mb-[24px]">
                            <div className="rounded-[10px] hover:bg-lighterBlue w-fit px-[16px] py-[5px] cursor-pointer text-[13px] font-semibold text-white bg-blue last:mb-0">
                                All
                            </div>
                            <div className="bg-grey rounded-[10px] text-blue hover:bg-lighterBlue w-fit px-[16px] py-[5px] cursor-pointer text-[13px] font-semibold last:mb-0">
                                UI
                            </div>
                            <div className="bg-grey rounded-[10px] text-blue hover:bg-lighterBlue w-fit px-[16px] py-[5px] cursor-pointer text-[13px] font-semibold last:mb-0">
                                UX
                            </div>
                            <div className="bg-grey rounded-[10px] text-blue hover:bg-lighterBlue w-fit px-[16px] py-[5px] cursor-pointer text-[13px] font-semibold last:mb-0">
                                Enchancement
                            </div>
                            <div className="bg-grey rounded-[10px] text-blue hover:bg-lighterBlue w-fit px-[16px] py-[5px] cursor-pointer text-[13px] font-semibold last:mb-0">
                                Bug
                            </div>
                            <div className="bg-grey rounded-[10px] text-blue hover:bg-lighterBlue w-fit px-[16px] py-[5px] cursor-pointer text-[13px] font-semibold last:mb-0">
                                Feature
                            </div>
                        </div>
                        <div className="bg-white rounded-[10px] p-[24px]">
                            <div className="flex items-center justify-between mb-[24px]">
                                <div className="text-darkNavy text-[18px] font-bold -tracking-[0.25]">
                                    Roadmap
                                </div>
                                <div className="text-blue underline text-[13px] font-semibold cursor-pointer">
                                    View
                                </div>
                            </div>
                            <div className="flex items-center justify-between mb-[15px] last:mb-0">
                                <div className="flex items-center gap-[16px]">
                                    <div className="w-[8px] h-[8px] bg-orange rounded-full"></div>
                                    <div className="text-lightNavy text-[16px]">
                                        Planned
                                    </div>
                                </div>
                                <div className="text-lightNavy text-[16px] font-bold">
                                    {feedbacksCountByStatus
                                        ? feedbacksCountByStatus[0].count
                                        : 0}
                                </div>
                            </div>
                            <div className="flex items-center justify-between mb-[15px] last:mb-0">
                                <div className="flex items-center gap-[16px]">
                                    <div className="w-[8px] h-[8px] bg-purple rounded-full"></div>
                                    <div className="text-lightNavy text-[16px]">
                                        In-Progress
                                    </div>
                                </div>
                                <div className="text-lightNavy text-[16px] font-bold">
                                    {feedbacksCountByStatus
                                        ? feedbacksCountByStatus[1].count
                                        : 0}
                                </div>
                            </div>
                            <div className="flex items-center justify-between mb-[15px] last:mb-0">
                                <div className="flex items-center gap-[16px]">
                                    <div className="w-[8px] h-[8px] bg-lightBlue rounded-full"></div>
                                    <div className="text-lightNavy text-[16px]">
                                        Live
                                    </div>
                                </div>
                                <div className="text-lightNavy text-[16px] font-bold">
                                    {feedbacksCountByStatus
                                        ? feedbacksCountByStatus[2].count
                                        : 0}
                                </div>
                            </div>
                        </div>
                    </Wrapper>
                </div>
            </div>
        </div>
    );
};
