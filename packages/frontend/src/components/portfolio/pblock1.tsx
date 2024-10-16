import ShiftedTextHeader from "../shifted-text-header";
import Image from "next/image";

export default function PortfolioBlock1() {
    return (
        <div className="relative flex flex-col p-10 items-center text-[#322920] max-w-[1400px] mx-auto mt-36">
            <div className="absolute top-0 left-0 w-full text-center z-10">
                <ShiftedTextHeader leftText="OUR" rightText="PORTFOLIO" />
            </div>
            <div className="text-left w-1/2 pr-4">
                <p className="mt-4 text-lg">
                    We provide every project with individual approach, flexibility for our clients.
                </p>
                <p className="mt-2">↓</p>
            </div>
            <div className="w-1/2 flex justify-end">
                <Image src={"/assets/images/portf1.png"} className="w-[640px] h-[215px]" width={640} height={500} alt="Portfolio Header" />
            </div>
        </div>
    );
}
