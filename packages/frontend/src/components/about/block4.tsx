import ShiftedTextHeader from "../shifted-text-header";
import Image from "next/image";

export default function AboutBlock4() {
    return (
        <div className="flex flex-col items-center justify-center p-6 flex-wrap">
       
            <ShiftedTextHeader leftText="OUR" rightText="TEAM" />
            <div className="text-center mt-40 mb-12">
                <p className="mt-4 text-[20px] md:text-[28px] text-[#352920] max-w-[800px]">
                    We have assembled a team of the best professionals in various areas of repair work to create the best repairs for you.
                </p>
            </div>

            <div className="space-y-12">
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
                    <Image
                        src="/assets/images/about1.png"
                        width={350}
                        height={300}
                        alt="Team member 1"
                    />
            
                    <div className="flex-grow text-center lg:text-left p-7">
                        <span className="text-[35px] text-[#322920]">Member Name</span>
                        <p className="mt-2 text-[20px] md:text-[28px] text-[#352920] max-w-[500px]">
                            Personal description, professional field, education, experience and so on.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start justify-between">
                    <Image
                        src="/assets/images/about1.png"
                        width={350}
                        height={300}
                        alt="Team member 1"
                    />
            
                    <div className="flex-grow text-center lg:text-left p-7">
                        <span className="text-[35px] text-[#322920]">Member Name</span>
                        <p className="mt-2 text-[20px] md:text-[28px] text-[#352920] max-w-[500px]">
                            Personal description, professional field, education, experience and so on.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
                    <Image
                        src="/assets/images/about1.png"
                        width={350}
                        height={300}
                        alt="Team member 1"
                    />
            
                    <div className="flex-grow text-center lg:text-left p-7">
                        <span className="text-[35px] text-[#322920]">Member Name</span>
                        <p className="mt-2 text-[20px] md:text-[28px] text-[#352920] max-w-[500px]">
                            Personal description, professional field, education, experience and so on.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}
