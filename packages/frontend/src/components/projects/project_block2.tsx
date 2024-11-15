import Image from "next/image";
import data from "@/app/projects_info/project/[id]/data.json";

const FormatedText = ({text}: {text: string}) => {
    return (
      <><strong>{text.slice(0, text.indexOf(':')+1)}</strong>{text.slice(text.indexOf(':') + 1, text.length)}</>
    );
}

export default function ProjectBlock2({ id }: { id: string }) {
    const content = data.project_info.projects.find(i => i.id == id)?.block2;
    return (
        <div className=" py-16 px-6 lg:px-24">
            <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0 mb-10">
                <div className="lg:w-1/2">
                    <Image src={content?.image_1 || ""} className="mx-auto" width={640} height={500} alt="Project Image 1" />
                </div>
                <div className="lg:w-1/2">
                    <Image src={content?.image_2 || ""} className="mx-auto" width={640} height={500} alt="Project Image 2" />
                </div>
            </div>
            
            <div className="text-center lg:text-left mb-10">
                <h2 className="text-2xl font-bold mb-4">{content?.t_1}</h2>
                <div className="space-y-6">
                    <p className="text-lg">
                    <FormatedText text={content?.t_2 || ""}/>
                    </p>
                    <p className="text-lg">
                    <FormatedText text={content?.t_3 || ""}/>
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0 mb-10">
                <div className="lg:w-1/2">
                    <Image src={content?.image_3 || ""} className="mx-auto" width={640} height={500} alt="Project Image 3" />
                </div>
                <div className="lg:w-1/2">
                    <Image src={content?.image_4 || ""} className="mx-auto" width={640} height={500} alt="Project Image 4" />
                </div>
            </div>

            <div className="text-center lg:text-left">
                <h2 className="text-2xl font-bold mb-4">{content?.t_4 || ""}</h2>
                <div className="space-y-6">
                    <p className="text-lg">
                    <FormatedText text={content?.t_5 || ""}/>
                    </p>
                    <p className="text-lg">
                    <FormatedText text={content?.t_6 || ""}/>
                    </p>
                    <p className="text-lg">
                    <FormatedText text={content?.t_7 || ""}/>
                    </p>
                    <p className="text-lg">
                    <FormatedText text={content?.t_8 || ""}/>
                    </p>
                </div>
            </div>
        </div>
    );
}
