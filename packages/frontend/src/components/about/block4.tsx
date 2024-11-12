import ShiftedTextHeader from "../shifted-text-header";
import Image from "next/image";
import data from "@/app/about/data.json";

export default function AboutBlock4() {
    const content = data.about.block4;
    return (
        <div className="flex flex-col items-center justify-center p-6 flex-wrap">
       
            <ShiftedTextHeader leftText="OUR" rightText="TEAM" />
            <div className="text-center mt-40 mb-12">
                <p className="mt-4 text-[20px] md:text-[28px] text-[#352920] max-w-[800px]">
                    {content.t_1}
                </p>
            </div>

            <div className="space-y-12">
                {
                    content["services-list"].map((i, key) => {
                    return (
                        <div key={key} className={`flex flex-col ${key % 2 != 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center lg:items-start justify-between`}>
                            <Image
                                src={i.photo}
                                width={350}
                                height={300}
                                alt={i.title}
                            />
                    
                            <div className="flex-grow text-center lg:text-left p-7">
                                <span className="text-[35px] text-[#322920]">{i.title}</span>
                                <p className="mt-2 text-[20px] md:text-[28px] text-[#352920] max-w-[500px]">
                                    {i.description}
                                </p>
                            </div>
                        </div>
                        );
                    })
                }
            </div>

        </div>
    );
}
