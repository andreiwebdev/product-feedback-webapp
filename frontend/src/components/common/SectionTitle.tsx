export const SectionTitle = (props: { text: string }) => {
    return (
        <h3 className="text-darkNavy text-[18px] font-bold -tracking-[0.25] mb-[24px]">
            {props.text}
        </h3>
    );
};
