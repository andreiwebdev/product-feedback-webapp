import { useState } from "react";
import { addComment } from "../../api/feedbacks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormGroup } from "../common";

type FormErrors = {
    [key: string]: string;
};

export const AddCommentSection = (props: { feedbackId: string }) => {
    const [comment, setComment] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const [charactersLeft, setCharactersLeft] = useState(250);

    const queryClient = useQueryClient();

    const { isPending, error, mutate } = useMutation({
        mutationFn: (data: {
            feedbackId: string;
            commentData: {
                firstName: string;
                lastName: string;
                comment: string;
            };
        }) => {
            return addComment(data.feedbackId, data.commentData);
        },
        onSuccess: () => {
            // Clear the comment input after successful submission
            setComment("");
            setFirstName("");
            setLastName("");
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: ["feedbackById", props.feedbackId],
            });
        },
    });

    const validateForm = () => {
        const errors: FormErrors = {};
        if (!comment.trim()) errors.comment = "Comment is required.";
        if (!firstName.trim()) errors.firstName = "First Name is required.";
        if (!lastName.trim()) errors.lastName = "Last Name is required.";
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
            feedbackId: props.feedbackId,
            commentData: {
                firstName,
                lastName,
                comment,
            },
        });
    };

    const textareaOnChange = (value: string) => {
        if (value.length > 250) {
            setComment(value.slice(0, 250)); // Truncate the value to 250 characters
            setCharactersLeft(0);
        } else {
            setComment(value);
            setCharactersLeft(250 - value.length);
        }
    };

    if (error) return <div>{JSON.stringify(error)}</div>;

    return (
        <div className="bg-white rounded-[10px] p-[24px]">
            <h3 className="text-darkNavy text-[18px] font-bold -tracking-[0.25] mb-[24px]">
                Add Comment
            </h3>
            <form>
                <div className="md:flex justify-between items-center">
                    <FormGroup
                        inputType="text"
                        onChange={setFirstName}
                        inputValue={firstName}
                        error={formErrors.firstName}
                        inputPlaceholder="First Name"
                        extraInputClasses="w-full"
                        parentStyles="w-full mr-4"
                    />
                    <FormGroup
                        inputType="text"
                        onChange={setLastName}
                        inputValue={lastName}
                        error={formErrors.lastName}
                        inputPlaceholder="Last Name"
                        extraInputClasses="w-full"
                        parentStyles="w-full"
                    />
                </div>
                <FormGroup
                    inputType="textarea"
                    onChange={textareaOnChange}
                    inputValue={comment}
                    error={formErrors.comment}
                    inputPlaceholder="Write your comment here"
                />
                <div className="flex justify-between items-center">
                    <div className="text-lightNavy text-[13px] md:text-[15px]">
                        {charactersLeft} Characters left
                    </div>
                    <button
                        onClick={handleFormSubmit}
                        className="bg-purple rounded-[10px] text-white px-[16px] py-[10px] text-[13px] font-bold cursor-pointer w-fit md:text-[14px] md:py-[12px] md:px-[24px] hover:bg-[#C75AF6] transition-colors"
                    >
                        {isPending ? "Adding Comment..." : "Add Comment"}
                    </button>
                </div>
            </form>
        </div>
    );
};
