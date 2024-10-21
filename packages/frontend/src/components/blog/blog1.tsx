import ShiftedTextHeader from "../shifted-text-header";
import Image from "next/image";

export default function BlogBlock1() {
    return (
        <div className="max-w-[1200px] mx-auto mb-36 mt-36">
            <div className="flex justify-center mb-60">
                <ShiftedTextHeader leftText="OUR" rightText="BLOG" />
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                <div className="lg:w-1/2 text-center lg:text-left lg:mr-22">
                    <h2 className="text-4xl font-bold text-[#322920]">Blog Name</h2>
                    <p className="mt-4 text-lg text-[#352920]">
                        Blog description, a few words about what this blog covers, topics discussed, and insights shared.
                    </p>
                </div>
                <div className="lg:w-1/2">
                    <Image src={"/assets/images/blog1.png"} className="mx-auto" width={640} height={500} alt="blog image" />
                </div>
            </div>
        </div>
    );
}