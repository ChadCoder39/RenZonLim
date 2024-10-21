import ShiftedTextHeader from "../shifted-text-header";
import Image from "next/image";

export default function AboutBlock4() {
    return (
        <div className="max-w-[1200px] mx-auto my-20">
            <div className="text-center mt-20 mb-12">
                <ShiftedTextHeader leftText="OUR" rightText="TEAM" />
                <p className="mt-4 text-lg text-[#352920]">
                    We have assembled a team of the best professionals in various areas of repair work to create the best repairs for you.
                </p>
            </div>

            <div className="space-y-12">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="lg:w-1/2">
                        <Image
                            src="/assets/images/about1.png"
                            width={350}
                            height={300}
                            alt="Team member 1"
                        />
                    </div>
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h3 className="text-2xl font-bold text-[#322920]">Member Name</h3>
                        <p className="mt-2 text-lg text-[#352920]">
                            Personal description, professional field, education, experience and so on.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row-reverse items-right justify-start">
                    <div className="lg:w-1/2">
                        <Image
                            src="/assets/images/about2.png"
                            width={350}
                            height={300}
                            alt="Team member 2"
                        />
                    </div>
                    <div className="lg:w-1/2 text-center lg:text-right">
                        <h3 className="text-2xl font-bold text-[#322920]">Member Name</h3>
                        <p className="mt-2 text-lg text-[#352920]">
                            Personal description, professional field, education, experience and so on.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="lg:w-1/2">
                        <Image
                            src="/assets/images/about3.png"
                            width={350}
                            height={300}
                            alt="Team member 3"
                        />
                    </div>
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h3 className="text-2xl font-bold text-[#322920]">Member Name</h3>
                        <p className="mt-2 text-lg text-[#352920]">
                            Personal description, professional field, education, experience and so on.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
