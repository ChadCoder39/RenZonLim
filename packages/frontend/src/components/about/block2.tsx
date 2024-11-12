import Image from "next/image";
import data from "@/app/about/data.json";

export default function AboutBlock2() {
    const content = data.about.block2;
    return (
        <div className="flex flex-col p-6 items-center">
            <span className="text-[40px] md:text-[54px] text-center space-x-20 whitespace-nowrap text-wrap">{content.t_1}</span>

            <div className="flex w-full flex-col xl:flex-row items-center xl:items-start justify-center mt-14">
                <div className="flex flex-row gap-4">
                    <span className="text-[54px] md:text-[74px]">{content.t_2}</span>
                    <span className="text-[20px] md:text-[28px] max-w-[305px] mt-10">{content.t_3}</span>
                </div>

                <div className="divider divider-vertical xl:divider-horizontal"></div>

                <div className="flex flex-row gap-4 items-start">
                    <span className="text-[54px] md:text-[74px]">{content.t_4}</span>
                    <span className="text-[20px] md:text-[28px] max-w-[305px] mt-10">{content.t_5}</span>
                </div>

                <div className="divider divider-vertical xl:divider-horizontal"></div>

                <div className="flex flex-row gap-4">
                    <span className="text-[54px] md:text-[74px]">{content.t_6}</span>
                    <span className="text-[20px] md:text-[28px] max-w-[305px] mt-10">{content.t_7}</span>
                </div>
            </div>

            <Image src={"/assets/images/about_block_2_1.png"} alt="about-2-1" width={1375} height={320} className="my-14"/>
        </div>
    );
}