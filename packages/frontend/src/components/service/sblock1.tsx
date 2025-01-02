import ShiftedTextHeader from "../shifted-text-header";
import Image from "next/image";
import data from "@/app/services/data.json";

export default function ServiceBlock1() {
    const content = data.services.block1;
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-[1200px] mx-auto mb-36 mt-36">
            <div className="lg:w-1/2 text-center lg:text-left lg:mr-20"> 
            <span className="text-[40px] md:text-[54px] text-center space-x-20 whitespace-nowrap text-wrap">{content.t_1}</span>
                <p className="mt-4 text-lg text-[#352920]">
                    {content.t_2}
                </p>
            </div>
            <div className="lg:w-1/2">
                <Image src={content.image_1} className="mx-auto" width={640} height={500} alt="service image" />
            </div>
        </div>
    );
}
