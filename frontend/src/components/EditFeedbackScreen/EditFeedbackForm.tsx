import { useState } from "react";
import { Dropdown } from "../common";

export const EditFeedbackForm = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [detail, setDetail] = useState("");
    const [status, setStatus] = useState("");

    const [error, setError] = useState(false);

    const handleFormSubmit = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        if (!title || !detail) {
            setError(true);
            return;
        }
    };

    return (
        <form>
            {/* feedback title */}
            <div className="mb-[24px]">
                <h4 className="text-darkNavy text-[13px] md:text-[14px] font-bold -tracking-[0.181px] mb-[3px]">
                    Feedback Title
                </h4>
                <p className="text-lightNavy text-[13px] md:text-[14px] mb-[16px]">
                    Add a short, descriptive headline
                </p>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    className={`w-full p-[14px] bg-[#F7F8FD] rounded-[10px] text-[13px] md:text-[14px] text-darkNavy focus:outline-none ${
                        error && !title ? "border border-red-500" : ""
                    }`}
                />
                {error && !title && (
                    <p className="text-red-500 text-[13px] mt-[8px]">
                        Please enter a title
                    </p>
                )}
            </div>
            {/* category */}
            <div className="mb-[24px]">
                <h4 className="text-darkNavy text-[13px] md:text-[14px] font-bold -tracking-[0.181px] mb-[3px]">
                    Category
                </h4>
                <p className="text-lightNavy text-[13px] md:text-[14px] mb-[16px]">
                    Choose a category for your feedback
                </p>
                <div className="w-full p-[14px] bg-[#F7F8FD] rounded-[10px] text-[13px] md:text-[14px] text-darkNavy">
                    <Dropdown
                        onSelect={(option) => setCategory(option)}
                        options={["Feature", "UI", "UX", "Enchancement", "Bug"]}
                        dropdownMenuExtraStyles="!w-full"
                        selectedOptionStyles="justify-between !text-darkNavy !font-normal"
                        arrowStyles="!text-blue"
                    />
                </div>
            </div>
            <div className="mb-[24px]">
                <h4 className="text-darkNavy text-[13px] md:text-[14px] font-bold -tracking-[0.181px] mb-[3px]">
                    Update Status
                </h4>
                <p className="text-lightNavy text-[13px] md:text-[14px] mb-[16px]">
                    Change feature state
                </p>
                <div className="w-full p-[14px] bg-[#F7F8FD] rounded-[10px] text-[13px] md:text-[14px] text-darkNavy">
                    <Dropdown
                        onSelect={(status) => setStatus(status)}
                        options={["Planned", "In Progress", "Live"]}
                        dropdownMenuExtraStyles="!w-full"
                        selectedOptionStyles="justify-between !text-darkNavy !font-normal"
                        arrowStyles="!text-blue"
                    />
                </div>
            </div>
            {/* feedback detail message */}
            <div className="mb-[40px]">
                <h4 className="text-darkNavy text-[13px] md:text-[14px] font-bold -tracking-[0.181px] mb-[3px]">
                    Feedback Detail
                </h4>
                <p className="text-lightNavy text-[13px] md:text-[14px] mb-[16px]">
                    Include any specific comments on what should be improved,
                    added, etc.
                </p>
                <textarea
                    onChange={(e) => setDetail(e.target.value)}
                    className={`w-full p-[14px] bg-[#F7F8FD] rounded-[10px] text-[13px] md:text-[14px] text-darkNavy focus:outline-none ${
                        error && !detail ? `border border-red-500` : ``
                    }`}
                    cols={30}
                    rows={5}
                ></textarea>
                {error && !detail && (
                    <p className="text-red-500 text-[13px] mt-[8px]">
                        Please enter a detail
                    </p>
                )}
            </div>
            {/* actions buttons */}
            <div className="md:flex md:items-center justify-between">
                <div className="md:flex md:justify-end md:gap-[16px] md:order-2">
                    <button
                        onClick={handleFormSubmit}
                        type="submit"
                        className="bg-[#AD1FEA] rounded-[10px] text-white px-[16px] py-[10px] text-[13px] font-bold cursor-pointer md:text-[14px] md:py-[12px] md:px-[24px] w-full mb-[16px] hover:bg-[#C75AF6] transition-colors md:mb-0 md:w-fit"
                    >
                        Save Changes
                    </button>
                    <button className="bg-darkNavy rounded-[10px] text-white px-[16px] py-[10px] text-[13px] font-bold cursor-pointer mb-[16px] md:mb-0 md:text-[14px] md:py-[12px] md:px-[24px] w-full hover:bg-[#656EA3] transition-colors text-center md:w-fit">
                        Cancel
                    </button>
                </div>
                <button
                    type="submit"
                    className="bg-[#D73737] rounded-[10px] text-white px-[16px] py-[10px] text-[13px] font-bold cursor-pointer md:text-[14px] md:py-[12px] md:px-[24px] w-full hover:bg-[#E98888] transition-colors md:w-fit md:order-1"
                >
                    Delete
                </button>
            </div>
        </form>
    );
};
