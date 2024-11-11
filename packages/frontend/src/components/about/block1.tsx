import Image from "next/image";
import ShiftedTextHeader from "../shifted-text-header";
import data from "@/app/about/data.json";

export default function AboutBlock1() {
    const content = data.about.block1;
    
    return (
        <div className="flex flex-col items-center justify-center p-6 flex-wrap">
            <ShiftedTextHeader leftText="ABOUT OUR" rightText="COMPANY" />

            <div className="flex flex-col xl:flex-row gap-12 md:gap-20 mt-44 items-center justify-between">
                <Image src={"/assets/images/about_block_1_1.png"} width={625} height={337} alt="about-1-1" />

                <Image src={"/assets/images/about_block_1_2.png"} width={625} height={217} className="max-h-[217px]" alt="about-1-2" />
            </div>

            <div className="flex flex-col items-center justify-center text-[28px] max-w-[665px] text-center mt-10">
                small description about company, what we do, where, how long and so on
                {content.a}
                <div className="flex w-full flex-col justify-center items-center mt-6">
                    <div className="divider max-w-[665px]"></div>
                </div>
            </div>
            

            <div className="flex flex-col xl:flex-row gap-20 mt-10 justify-center items-center">
                <div className="flex flex-col gap-5 max-w-xl text-center lg:text-start justify-center items-center">
                    <span className="text-[28px]">
                        some text about company history, how it started, first projects, failures, team, motivation, business scaling
                    </span>
                    <span className="text-[28px]">
                        Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private
                    </span>
                    <span className="text-[28px]">
                        Everyone has the right to freedom of opinion and expression; this right includes freedom to hold opinions without interference and to seek
                    </span>
                </div>

                <Image src={"/assets/images/about_block_1_3.png"} width={724} height={652} alt="block-1-3" />
            </div>
        </div>
    );
}