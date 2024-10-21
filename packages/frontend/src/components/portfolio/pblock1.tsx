import ShiftedTextHeader from "../shifted-text-header";
import Image from "next/image";

export default function PortfolioBlock1() {
    return (
        <div className="flex flex-col items-center justify-center p-6 flex-wrap">
            <div className="mt-20">
                <ShiftedTextHeader leftText="OUR" rightText="PORTFOLIO" />
            </div>

            <div className="flex flex-col xl:flex-row gap-12 md:gap-20 mt-44 items-center justify-between">
                <div className="text-left w-full xl:w-1/2 pr-4">
                    <p className="mt-20 text-lg">
                        We provide every project with an individual approach, ensuring flexibility for our clients.
                    </p>
                    <p className="mt-2">↓</p>
                </div>

                <div className="flex w-full xl:w-1/2 justify-end">
                    <Image 
                        src={"/assets/images/portf1.png"} 
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

