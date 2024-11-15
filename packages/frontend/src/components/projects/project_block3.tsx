import Image from "next/image";
import data from "@/app/projects_info/project/[id]/data.json";

export default function ProjectBlock3({id}: {id: string}) {
    const content = data.project_info.projects.find(i => i.id == id)?.block3;
    return (
        <div className="mb-36 max-w-[1200px] mx-auto">
            
            <div className="flex flex-col lg:flex-row gap-2 mt-20 items-center justify-center p-10">
                <div className="flex flex-col gap-4">
                    <Image src={content?.image_1 || ""} alt="serv5" width={471} height={580}/>
                    <Image src={content?.image_2 || ""} alt="serv4" width={474} height={290}/>
                </div> 

                <div className="flex flex-col gap-2">
                    <Image src={content?.image_3 || ""} alt="serv6" width={474} height={290}/>
                    <Image src={content?.image_4 || ""} alt="serv7" width={471} height={580}/>
                </div>

                <div className="flex flex-col gap-2">
                    <Image src={content?.image_5 || ""} alt="serv8" width={376} height={870}/>
                </div>
            </div>
        </div>
    );
}