import { useState } from "react";
import { FaAngleDown, FaCheck } from "react-icons/fa";

export const Dropdown = (props: {
    options: string[];
    dropdownMenuExtraStyles?: string;
}) => {
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [selectedOption, setSelectedOption] = useState(props.options[0]);

    const handleOptionClick = (option: string) => {
        setToggleDropdown(false);
        setSelectedOption(option);
    };

    return (
        <div className="relative">
            <div
                onClick={() => setToggleDropdown(!toggleDropdown)}
                className="flex gap-[8px] text-[14px] text-white cursor-pointer font-bold"
            >
                {selectedOption}
                <FaAngleDown
                    className={`relative top-[4px] ${
                        toggleDropdown
                            ? "rotate-180 transition-transform"
                            : "rotate-0 transition-transform"
                    }`}
                />
            </div>
            <div
                style={{
                    boxShadow: "0px 10px 40px -7px rgba(55, 63, 104, 0.35)",
                }}
                className={`hidden opacity-1 bg-white rounded-[10px] absolute top-[65px] text-[16px] text-lightNavy w-[200px] max-h-[200px] overflow-auto md:w-[250px] xl:w-[300px] z-50 ${
                    toggleDropdown ? "!block" : ""
                } ${props.dropdownMenuExtraStyles}`}
            >
                {props.options.map((option, index) => (
                    <div
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className="py-[12px] px-[24px] cursor-pointer border-b last:border-0 hover:text-purple transition-colors flex items-center justify-between"
                    >
                        {option}
                        {selectedOption === option && (
                            <FaCheck className="text-purple" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
