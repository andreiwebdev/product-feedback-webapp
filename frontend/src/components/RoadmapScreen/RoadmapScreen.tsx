import { FaAngleLeft } from "react-icons/fa";
import { Wrapper } from "../common";
import { useEffect, useState } from "react";
import { FeatureCard } from ".";

export const RoadmapScreen = () => {
    const [mobileActiveTab, setMobileActiveTab] = useState("In-Progress");

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        console.log("resize");

        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const data = [
        {
            name: "Planned",
            color: "#F49F85",
            numberOfFeatures: 2,
            description: "Ideas prioritized for research",
            features: [
                {
                    title: "One-click portfolio generation",
                    description:
                        "Add ability to create professional looking portfolio from profile.",
                    category: "Enchancement",
                    upvotes: 112,
                    comments: 2,
                },
                {
                    title: "Bookmarking",
                    description:
                        "Allow users to bookmark items in the feed to come back to later.",
                    category: "Feature",
                    upvotes: 75,
                    comments: 3,
                },
            ],
        },
        {
            name: "In-Progress",
            color: "#AD1FEA",
            numberOfFeatures: 3,
            description: "Currently being developed",
            features: [
                {
                    title: "User profile",
                    description: "Add ability for users to create a profile",
                    category: "Feature",
                    upvotes: 45,
                    comments: 6,
                },
                {
                    title: "User profile",
                    description: "Add ability for users to create a profile",
                    category: "Feature",
                    upvotes: 45,
                    comments: 6,
                },
                {
                    title: "User profile",
                    description: "Add ability for users to create a profile",
                    category: "Feature",
                    upvotes: 45,
                    comments: 6,
                },
            ],
        },
        {
            name: "Live",
            color: "#62BCFA",
            numberOfFeatures: 1,
            description: "Features recently shipped",
            features: [
                {
                    title: "User profile",
                    description: "Add ability for users to create a profile",
                    category: "Feature",
                    upvotes: 45,
                    comments: 6,
                },
            ],
        },
    ];

    return (
        <Wrapper extraClasses="!px-0 md:pt-[56px] xl:max-w-6xl">
            <div className="bg-navy w-full px-[24px] py-[26px] md:mb-[32px] flex items-center justify-between md:rounded-[10px] md:py-[26px] md:px-[32px] xl:mb-[48px] ">
                <div className="flex flex-col items-center">
                    <div className="text-white flex items-center gap-[15px] cursor-pointer">
                        <FaAngleLeft />
                        <div className="text-[13px] font-bold md:text-[14px]">
                            Go Back
                        </div>
                    </div>
                    <h3 className="text-white text-[18px] font-bold -tracking-[0.25] md:text-[24px] md:-tracking-[0.333px]">
                        Roadmap
                    </h3>
                </div>
                <div className="bg-purple rounded-[10px] text-white px-[16px] py-[10px] text-[13px] font-bold cursor-pointer w-fit md:text-[14px] md:py-[12px] md:px-[24px]">
                    + Add Feedback
                </div>
            </div>
            {isMobile && (
                <div className="border-b pt-[20px] px-[20px] mb-[24px] flex items-center justify-between md:hidden">
                    {data.map((item, index) => (
                        <div
                            onClick={() => setMobileActiveTab(item.name)}
                            key={index}
                            className={`text-darkNavy text-[13px] font-bold -tracking-[0.181px] pb-[20px] cursor-pointer ${
                                mobileActiveTab === item.name
                                    ? "opacity-[1]"
                                    : "opacity-[0.4]"
                            }`}
                            style={{
                                borderBottom:
                                    mobileActiveTab === item.name
                                        ? `2px solid ${item.color}`
                                        : "none",
                            }}
                        >
                            {item.name} ({item.numberOfFeatures})
                        </div>
                    ))}
                </div>
            )}
            {/* cards sections */}
            {isMobile ? (
                <div className="px-[24px] md:hidden">
                    {data.map(
                        (item, index) =>
                            item.name === mobileActiveTab && (
                                <div key={index}>
                                    <h3 className="text-darkNavy text-[18px] font-bold -tracking-[0.25px] mb-[4px]">
                                        {item.name} ({item.numberOfFeatures})
                                    </h3>
                                    <p className="text-lightNavy text-[13px] mb-[24px]">
                                        {item.description}
                                    </p>
                                    {item.features.map((feature, index) => (
                                        <FeatureCard
                                            key={index}
                                            title={feature.title}
                                            color={item.color}
                                            description={feature.description}
                                            category={feature.category}
                                            upvotes={feature.upvotes}
                                            comments={feature.comments}
                                            status={item.name}
                                        />
                                    ))}
                                </div>
                            )
                    )}
                </div>
            ) : (
                <div className="hidden md:grid md:grid-cols-3 md:gap-[10px] xl:gap-[30px]">
                    {data.map((item, index) => (
                        <div className="" key={index}>
                            <h3 className="text-darkNavy text-[18px] font-bold -tracking-[0.25px] mb-[4px]">
                                {item.name} ({item.numberOfFeatures})
                            </h3>
                            <p className="text-lightNavy text-[13px] mb-[24px]">
                                {item.description}
                            </p>
                            {item.features.map((feature, index) => (
                                <FeatureCard
                                    key={index}
                                    title={feature.title}
                                    color={item.color}
                                    description={feature.description}
                                    category={feature.category}
                                    upvotes={feature.upvotes}
                                    comments={feature.comments}
                                    status={item.name}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </Wrapper>
    );
};
