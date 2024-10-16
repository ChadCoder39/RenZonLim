export default function ShiftedTextHeader({leftText, rightText, customFontSize}: {
    leftText: string;
    rightText: string;
    customFontSize?: number;
}) {
    return (
        <div className="flex flex-row justify-center items-center relative w-full gap-2 flex-wrap">
            <span className={`text-[${customFontSize ? customFontSize : 54}px] absolute top-0 mr-0 md:mr-[200px]`}>{leftText}</span>
            <span className={`text-[${customFontSize ? customFontSize : 54}px] absolute top-14 ml-0 md:ml-[200px]`}>{rightText}</span>
        </div>
    );
}