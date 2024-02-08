import { useState } from "react";
import { FormGroup } from "../common";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createFeedback } from "../../api/feedbacks";

type FormErrors = {
    [key: string]: string;
};

export const CreateNewFeedbackForm = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("Feature");
    const [detail, setDetail] = useState("");
    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { isPending, error, mutate } = useMutation({
        mutationFn: createFeedback,
        onSuccess: (newFeedback) => {
            queryClient.setQueryData(
                ["feedbacks", newFeedback.insertedId],
                newFeedback
            );
            console.log(newFeedback);
            navigate(`/feedbacks/${newFeedback.insertedId}`);
        },
    });

    const validateForm = () => {
        const errors: {
            [key: string]: string;
        } = {};
        if (!title.trim()) errors.title = "Title is required 😔.";
        if (!detail.trim()) errors.detail = "Please provide some details 🤓.";
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleFormSubmit = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        if (!validateForm()) {
            return; // Prevent submission if validation fails
        }
        mutate({
            title,
            category,
            description: detail,
            upvotes: 1,
            comments: [],
            status: "Planned"
        });
    };

    if (error) return <div>{JSON.stringify(error)}</div>;

    return (
        <form>
            <FormGroup
                inputType="text"
                groupTitle="Feedback Title"
                groupDescription="Add a short, descriptive headline"
                onChange={setTitle}
                inputValue={title}
                error={formErrors.title}
            />
            <FormGroup
                inputType="dropdown"
                groupTitle="Category"
                groupDescription="Choose a category for your feedback"
                onChange={setCategory}
                inputValue={category}
                dropdownOptions={["Feature", "UI", "UX", "Enchancement", "Bug"]}
            />
            <FormGroup
                inputType="textarea"
                groupTitle="Feedback Detail"
                groupDescription="Include any specific comments on what should be improved, added, etc."
                onChange={setDetail}
                inputValue={detail}
                error={formErrors.detail}
            />
            {/* actions buttons */}
            <div className="md:flex md:justify-end md:gap-[16px]">
                <button
                    onClick={handleFormSubmit}
                    type="submit"
                    className="bg-[#AD1FEA] rounded-[10px] text-white px-[16px] py-[10px] text-[13px] font-bold cursor-pointer md:text-[14px] md:py-[12px] md:px-[24px] w-full mb-[16px] hover:bg-[#C75AF6] transition-colors md:mb-0 md:order-2 md:w-fit"
                >
                    {isPending ? "Loading..." : "Add Feedback"}
                </button>
                <button
                    onClick={() => navigate("/")}
                    className="bg-darkNavy rounded-[10px] text-white px-[16px] py-[10px] text-[13px] font-bold cursor-pointer md:text-[14px] md:py-[12px] md:px-[24px] w-full hover:bg-[#656EA3] transition-colors text-center md:order-1 md:w-fit"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};
