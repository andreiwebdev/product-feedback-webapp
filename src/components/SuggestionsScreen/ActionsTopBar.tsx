import { Dropdown } from "../common";
import { SvgIdea } from "../svgs";

export const ActionsTopBar = () => {
    return (
        <div className="bg-navy w-full px-[24px] py-[8px] mb-[32px] flex items-center justify-between md:max-w-3xl md:mx-auto md:rounded-[10px] md:mb-[24px] md:py-[16px] md:px-[24px] xl:mx-0 xl:w-full xl:max-w-full xl:p-[24px]">
            <div className="text-white text-[13px] flex items-center gap-[8px] md:text-[14px]">
                <div className="flex gap-[38px] items-center">
                    <div className="hidden md:flex items-center gap-[16px] text-[18px] font-bold -tracking-[-0.25] text-white">
                        <SvgIdea /> 6 Suggestions
                    </div>
                    <div className="flex gap-[4px]">
                        Sort by :
                        <Dropdown
                            options={[
                                "Most Upvotes",
                                "Least Upvotes",
                                "Most Comments",
                                "Least Comments",
                            ]}
                            dropdownMenuExtraStyles="-left-[50%]"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-purple rounded-[10px] text-white px-[16px] py-[10px] text-[13px] font-bold cursor-pointer w-fit md:text-[14px] md:py-[12px] md:px-[24px]">
                + Add Feedback
            </div>
        </div>
    );
};
