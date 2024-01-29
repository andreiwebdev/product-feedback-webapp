export const AddCommentSection = () => {
    return (
        <div className="bg-white rounded-[10px] p-[24px]">
            <h3 className="text-darkNavy text-[18px] font-bold -tracking-[0.25] mb-[24px]">
                Add Comment
            </h3>
            <form>
                <textarea
                    className="bg-[#F7F8FD] w-full rounded-[10px] mb-[16px] p-[16px] placeholder:text-[13px] placeholder:text-[#8C92B3] focus:outline-none text-[13px] md:placeholder:text-[14px] md:text-[14px] md:py-[16px] md:px-[24px]"
                    cols={30}
                    rows={5}
                    placeholder="Type your comment here"
                ></textarea>
                <div className="flex justify-between items-center">
                    <div className="text-lightNavy text-[13px] md:text-[15px]">
                        250 Characters left
                    </div>
                    <div className="bg-purple rounded-[10px] text-white px-[16px] py-[10px] text-[13px] font-bold cursor-pointer w-fit md:text-[14px] md:py-[12px] md:px-[24px] hover:bg-[#C75AF6] transition-colors">
                        Post Comment
                    </div>
                </div>
            </form>
        </div>
    );
};
