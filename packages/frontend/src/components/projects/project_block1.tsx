import Image from "next/image";
import ShiftedTextHeader from "../shifted-text-header";
import data from "@/app/projects_info/project/[id]/data.json";

export default function ProjectBlock1({id} : {id: string}) {
    const content = data.project_info.projects.find(i => i.id == id)?.block1;
    return (
        <div className="mt-24 flex flex-col p-10 justify-center items-center">
            <ShiftedTextHeader leftText="ABOUT" rightText="PROJECT" />

            <div className="flex flex-col lg:flex-row items-center gap-20 max-w-[1485px] mt-36 lg:mt-24">
                <Image
                    src={content?.image_1 || "no-image"}
                    width={640}
                    height={400}
                    className="md:w-[473px] md:h-[542px] lg:w-[640px] lg:h-[400px]"
                    alt="Project Image"
                />

                <div className="flex flex-col gap-6 mt-0 lg:mt-16">
                    <p className="text-[18px] lg:text-[24px] text-center lg:text-start">
                        {content?.t_1}
                    </p>
                    <p className="text-[18px] lg:text-[24px] text-center lg:text-start">
                        {content?.t_2}
                    </p>
                    <p className="text-[18px] lg:text-[24px] text-center lg:text-start">
                        {content?.t_3}
                    </p>

                    <button className="self-center lg:self-start bg-transparent border-[1.4px] border-solid border-[#322920] w-[200px] lg:w-[260px] p-2 text-[20px] lg:text-[28px] hover:bg-[#322920] hover:text-[#ece3ca] transition-all ease-in-out">
                        {content?.t_4}
                    </button>
                </div>
            </div>
        </div>
    );
}
