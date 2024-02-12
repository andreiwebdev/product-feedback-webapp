import { Dropdown } from ".";

export const FormGroup = (props: {
    inputType: string;
    groupTitle?: string;
    groupDescription?: string;
    onChange: (value: string) => void | any;
    inputValue: string;
    dropdownOptions?: string[];
    error?: string;
    inputPlaceholder?: string;
    extraInputClasses?: string;
    parentStyles?: string;
}) => {
    return (
        <div
            className={`mb-[24px] ${props.parentStyles ?? props.parentStyles}`}
        >
            {props.groupTitle && (
                <h4 className="text-darkNavy text-[13px] md:text-[14px] font-bold -tracking-[0.181px] mb-[3px]">
                    {props.groupTitle}
                </h4>
            )}
            {props.groupDescription && (
                <p className="text-lightNavy text-[13px] md:text-[14px] mb-[16px]">
                    {props.groupDescription}
                </p>
            )}
            {props.inputType === "text" && (
                <input
                    onChange={(e) => props.onChange(e.target.value)}
                    value={props.inputValue}
                    type="text"
                    className={`w-full p-[14px] bg-[#F7F8FD] rounded-[10px] text-[13px] md:text-[14px] text-darkNavy focus:outline-none ${
                        props.extraInputClasses ?? props.extraInputClasses
                    } ${props.error ? "border border-red-500" : ""}`}
                    placeholder={
                        props.inputPlaceholder ? props.inputPlaceholder : ""
                    }
                />
            )}
            {props.inputType === "dropdown" && (
                <div className="w-full p-[14px] bg-[#F7F8FD] rounded-[10px] text-[13px] md:text-[14px] text-darkNavy">
                    <Dropdown
                        onSelect={(option: string) => props.onChange(option)}
                        options={
                            props.dropdownOptions ? props.dropdownOptions : []
                        }
                        dropdownMenuExtraStyles="!w-full"
                        selectedOptionStyles="justify-between !text-darkNavy !font-normal"
                        arrowStyles="!text-blue"
                    />
                </div>
            )}
            {props.inputType === "textarea" && (
                <textarea
                    onChange={(e) => props.onChange(e.target.value)}
                    value={props.inputValue}
                    className={`w-full p-[14px] bg-[#F7F8FD] rounded-[10px] text-[13px] md:text-[14px] text-darkNavy focus:outline-none ${
                        props.extraInputClasses ?? props.extraInputClasses
                    } ${props.error ? `border border-red-500` : ``}`}
                    cols={30}
                    rows={5}
                    placeholder={
                        props.inputPlaceholder ? props.inputPlaceholder : ""
                    }
                ></textarea>
            )}
            {props.error && (
                <p className="text-red-500 text-[13px] mt-[8px]">
                    {props.error}
                </p>
            )}
        </div>
    );
};
