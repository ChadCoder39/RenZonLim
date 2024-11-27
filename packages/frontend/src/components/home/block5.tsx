import Image from "next/image";
import ShiftedTextHeader from "../shifted-text-header";
import Link from "next/link";
import data from "@/app/data.json";

export default function HomeBlock5() {
    const content = data.app.block5;
    return (
        <div className="flex flex-col p-10 md:p-10 bg-[#1a1611] min-h-96 mt-20">
            <ShiftedTextHeader leftText="RECENT" rightText="PROJECTS" theme="light"/>

            <div className="flex flex-row flex-wrap gap-5 lg:gap-20 justify-center items-start text-center lg:text-start z-10">
                <div className="flex flex-col mt-44 gap-4 text-[#ece3ca]">
                    <Image src={content.image_1} alt="i1" width={720} height={535} />

                    <Link href={"/"} className="text-[28px]">{content.n_2}</Link>

                    <Link href="/projects_info/project/demo_project" passHref>
                    <button className="transition-all ease-in-out text-[28px] bg-[#322920] w-[270px] p-1 hover:bg-[#5a4a3a] self-center lg:self-start">Read More</button>
                    </Link>
                </div>

                <div className="flex flex-col mt-10 lg:mt-44 gap-4 text-[#ece3ca]">
                    <Image src={content.image_3} alt="i2" width={497} height={755} />

                    <Link href={"/"} className="text-[28px]">{content.n_4}</Link>

                    <Link href="/projects_info/project/demo_project" passHref>
                    <button className="transition-all ease-in-out text-[28px] bg-[#322920] w-[270px] p-1 hover:bg-[#5a4a3a] self-center lg:self-start">Read More</button>
                    </Link>
                </div>
            </div>

            <div className="flex flex-row-reverse flex-wrap gap-5 lg:gap-20 justify-center items-end mt-0 lg:-mt-56 text-center lg:text-start z-0">
                <div className="flex flex-col mt-10 lg:mt-44 gap-4 text-[#ece3ca]">
                    <Image src={content.image_5} alt="i4" width={720} height={535} />

                    <Link href={"/"} className="text-[28px]">{content.n_6}</Link>

                    <Link href="/projects_info/project/demo_project" passHref>
                    <button className="transition-all ease-in-out text-[28px] bg-[#322920] w-[270px] p-1 hover:bg-[#5a4a3a] self-center lg:self-start">Read More</button>
                    </Link>
                </div>

                <div className="flex flex-col mt-10 lg:mt-44 gap-4 text-[#ece3ca]">
                    <Image src={content.image_7} alt="i3" width={497} height={755} />

                    <Link href={"/"} className="text-[28px]">{content.n_8}</Link>
                    
                    <Link href="/projects_info/project/demo_project" passHref>
                    <button className="transition-all ease-in-out text-[28px] bg-[#322920] w-[270px] p-1 hover:bg-[#5a4a3a] self-center lg:self-start">Read More</button>
                    </Link>
                </div>
            </div>
            <Link href="/portfolio" passHref className="self-center"> 
                <button className="transition-all ease-in-out text-[24px] md:text-[34px] text-[#ece3ca] bg-[#1a1611] hover:bg-[#ece3ca] hover:text-[#1a1611] w-[260px] md:w-[345px] p-2 self-center mt-20 border-solid border-[1.5px] border-[#ece3ca]">SEE ALL PROJECTS</button>
            </Link>
            
        </div>
    );
}
