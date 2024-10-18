import ShiftedTextHeader from "../shifted-text-header";
import Image from "next/image";

export default function ServiceBlock2() {
    return (
        <div className="mb-36 max-w-[1200px] mx-auto">
            <h2 className="text-4xl font-bold text-[#322920] text-left">Before</h2>
            <div className="flex flex-col lg:flex-row justify-between mt-10 space-y-6 lg:space-y-0 lg:space-x-6">
                <div className="lg:w-1/2">
                    <Image src={"/assets/images/serv2.png"} className="w-full h-[300px]" width={640} height={800} alt="before image 1" />
                    <p className="mt-4 text-lg text-[#352920]">
                        Description for the first image goes here. Provide details specific to the first image.
                    </p>
                </div>
                <div className="lg:w-1/2">
                    <Image src={"/assets/images/serv3.png"} className="w-full h-[200px]" width={640} height={500} alt="before image 2" />
                    <p className="mt-4 text-lg text-[#352920]">
                        Description for the second image goes here. Provide details specific to the second image.
                    </p>
                </div>
            </div>
        </div>
    );
}
