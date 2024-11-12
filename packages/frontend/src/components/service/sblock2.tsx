import ShiftedTextHeader from "../shifted-text-header";
import Image from "next/image";
import data from "@/app/services/data.json";

export default function ServiceBlock2() {
    const content = data.services.block2;
    return (
        <div className="mb-36 max-w-[1200px] mx-auto">
            <h2 className="text-4xl font-bold text-[#322920] text-left">{content.t_1}</h2>
            <div className="flex flex-col lg:flex-row justify-between mt-10 space-y-6 lg:space-y-0 lg:space-x-6">
                <div className="lg:w-1/2">
                    <Image src={content.image_1} className="w-full h-[300px]" width={640} height={800} alt="before image 1" />
                    <p className="mt-4 text-lg text-[#352920]">
                        {content.t_2}
                    </p>
                </div>
                <div className="lg:w-1/2">
                    <Image src={content.image_2} className="w-full h-[200px]" width={640} height={500} alt="before image 2" />
                    <p className="mt-4 text-lg text-[#352920]">
                       {content.t_3}
                    </p>
                </div>
            </div>
        </div>
    );
}
