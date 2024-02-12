import { FaAngleLeft } from "react-icons/fa";
import { Loading, Wrapper } from "../common";
import { useEffect, useState } from "react";
import { FeatureCard } from ".";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getFeedbacksWithStatus } from "../../api/feedbacks";
import { NoFeedback } from "../SuggestionsScreen";

export const RoadmapScreen = () => {
    const { data: feedbacks, isLoading } = useQuery({
        queryKey: ["feedbacksByStatus"],
        queryFn: getFeedbacksWithStatus,
    });

    const navigate = useNavigate();

    const [mobileActiveTab, setMobileActiveTab] = useState("In-Progress");
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);

        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const getSectionDescription = (status: string) => {
        if (status === "Planned") {
            return "Ideas prioritized for research";
        } else if (status === "In-Progress") {
            return "Currently being developed";
        } else if (status === "Live") {
            return "Features recently shipped";
        }
    };

    const getStatusColor = (status: string) => {
        if (status === "Planned") {
            return "#F49F85";
        } else if (status === "In-Progress") {
            return "#AD1FEA";
        } else if (status === "Live") {
            return "#62BCFA";
        }
    };

    if (isLoading) {
        return (
            <div className="bg-lightGrey flex justify-center items-center h-screen">
                <Loading />
            </div>
        );
    }

    return (
        <Wrapper extraClasses="!px-0 md:pt-[56px] xl:max-w-6xl">
            <div className="bg-navy w-full px-[24px] py-[26px] md:mb-[32px] flex items-center justify-between md:rounded-[10px] md:py-[26px] md:px-[32px] xl:mb-[48px] ">
                <div className="flex flex-col items-center">
                    <div
                        onClick={() => navigate("/")}
                        className="text-white flex items-center gap-[15px] cursor-pointer"
                    >
                        <FaAngleLeft />
                        <div className="text-[13px] font-bold md:text-[14px]">
                            Go Back
                        </div>
                    </div>
                    <h3 className="text-white text-[18px] font-bold -tracking-[0.25] md:text-[24px] md:-tracking-[0.333px]">
                        Roadmap
                    </h3>
                </div>
                <div
                    onClick={() => navigate("/add-feedback")}
                    className="bg-purple rounded-[10px] text-white px-[16px] py-[10px] text-[13px] font-bold cursor-pointer w-fit md:text-[14px] md:py-[12px] md:px-[24px]"
                >
                    + Add Feedback
                </div>
            </div>
            {feedbacks.count === 0 && <NoFeedback />}
            {isMobile && (
                <div className="border-b pt-[20px] px-[20px] mb-[24px] flex items-center justify-between md:hidden">
                    {feedbacks?.feedbacksByStatus.map(
                        (item: any, index: number) => (
                            <div
                                onClick={() => setMobileActiveTab(item._id)}
                                key={index}
                                className={`text-darkNavy text-[13px] font-bold -tracking-[0.181px] pb-[20px] cursor-pointer ${
                                    mobileActiveTab === item._id
                                        ? "opacity-[1]"
                                        : "opacity-[0.4]"
                                }`}
                                style={{
                                    borderBottom: `${
                                        mobileActiveTab === item._id
                                            ? "2px solid " +
                                              getStatusColor(item._id)
                                            : "none"
                                    }`,
                                }}
                            >
                                {item._id} ({item.numberOfFeatures})
                            </div>
                        )
                    )}
                </div>
            )}
            {/* cards sections */}
            {isMobile ? (
                <div className="px-[24px] md:hidden">
                    {feedbacks?.feedbacksByStatus.map(
                        (item: any, index: number) =>
                            item._id === mobileActiveTab && (
                                <div key={index}>
                                    <h3 className="text-darkNavy text-[18px] font-bold -tracking-[0.25px] mb-[4px]">
                                        {item._id} ({item.numberOfFeatures})
                                    </h3>
                                    <p className="text-lightNavy text-[13px] mb-[24px]">
                                        {getSectionDescription(item._id)}
                                    </p>
                                    {item.features.map(
                                        (feature: any, index: number) => (
                                            <FeatureCard
                                                id={feature.id}
                                                key={index}
                                                title={feature.title}
                                                color={getStatusColor(item._id)}
                                                description={
                                                    feature.description
                                                }
                                                category={feature.category}
                                                upvotes={feature.upvotes}
                                                comments={feature.comments}
                                                status={item._id}
                                            />
                                        )
                                    )}
                                </div>
                            )
                    )}
                </div>
            ) : (
                <div className="hidden md:grid md:grid-cols-3 md:gap-[10px] xl:gap-[30px]">
                    {feedbacks?.feedbacksByStatus.map(
                        (item: any, index: number) => (
                            <div className="" key={index}>
                                <h3 className="text-darkNavy text-[18px] font-bold -tracking-[0.25px] mb-[4px]">
                                    {item._id} ({item.numberOfFeatures})
                                </h3>
                                <p className="text-lightNavy text-[13px] mb-[24px]">
                                    {getSectionDescription(item._id)}
                                </p>
                                {item.features.map(
                                    (feature: any, index: number) => (
                                        <FeatureCard
                                            id={feature.id}
                                            key={index}
                                            title={feature.title}
                                            color={getStatusColor(item._id)}
                                            description={feature.description}
                                            category={feature.category}
                                            upvotes={feature.upvotes}
                                            comments={feature.comments}
                                            status={item._id}
                                        />
                                    )
                                )}
                            </div>
                        )
                    )}
                </div>
            )}
        </Wrapper>
    );
};
