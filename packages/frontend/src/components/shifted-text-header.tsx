export default function ShiftedTextHeader({leftText, rightText, customFontSize, theme}: {
    leftText: string;
    rightText: string;
    customFontSize?: number;
    theme?: "light" | "dark"
}) {
    return (
        <div className={`flex flex-row justify-center items-center relative w-full gap-2 flex-wrap ${theme == "light" ? "text-[#ece3ca]" : "text-[#1a1611]"}`}>
            <span className={`text-[40px] md:text-[54px] absolute top-0 mr-0 md:mr-[200px]`}>{leftText}</span>
            <span className={`text-[40px] md:text-[54px] absolute top-14 ml-0 md:ml-[200px]`}>{rightText}</span>
        </div>
    );
}