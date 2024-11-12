import ShiftedTextHeader from "../shifted-text-header";
import Image from "next/image";
import data from "@/app/portfolio/data.json";

export default function PortfolioBlock1() {
    const content = data.portfolio.block1;
    return (
        <div className="flex flex-col items-center justify-center p-6 flex-wrap">
            <div className="mt-20">
                <ShiftedTextHeader leftText="OUR" rightText="PORTFOLIO" />
            </div>

            <div className="flex flex-col xl:flex-row gap-12 md:gap-20 mt-44 items-center justify-between">
                <div className="text-left w-full xl:w-1/2 pr-4">
                    <p className="mt-20 text-lg">
                        {content.t_1}
                    </p>
                    <p className="mt-2">↓</p>
                </div>

                <div className="flex w-full xl:w-1/2 justify-end">
                    <Image 
                        src={content.image_1} 
                        width={640} 
                        height={215} 
                        alt="Portfolio Header"
                        className="max-h-[215px]"
                    />
                </div>
            </div>
        </div>
    );
}

