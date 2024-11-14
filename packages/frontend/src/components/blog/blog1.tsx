import ShiftedTextHeader from "../shifted-text-header";
import Image from "next/image";
import data from "@/app/blog/data.json";

export default function BlogBlock1() {
    const content = data.blog.block1;
    return (
        <div className="max-w-[1200px] mx-auto mb-36 mt-36">
            <div className="flex justify-center mb-60">
                <ShiftedTextHeader leftText="OUR" rightText="BLOG" />
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                <div className="lg:w-1/2 text-center lg:text-left lg:mr-22">
                    <h2 className="text-4xl font-bold text-[#322920]">{content.n_1}</h2>
                    <p className="mt-4 text-lg text-[#352920]">
                        {content.n_2}
                    </p>
                </div>
                <div className="lg:w-1/2">
                    <Image src={content.image_1} className="mx-auto" width={640} height={500} alt="blog image" />
                </div>
            </div>
        </div>
    );
}