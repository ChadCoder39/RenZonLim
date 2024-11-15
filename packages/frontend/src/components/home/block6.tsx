import Image from "next/image";
import data from "@/app/data.json";
import Link from 'next/link'

export default function HomeBlock6() {
    const content = data.app.block6;
    return (
        <div className="flex flex-col gap-0 px-10">
            <div className="flex flex-row justify-evenly items-center min-h-[512px] flex-wrap">
                <div className="flex items-center justify-center min-h-[300px] md:min-h-[512px]">
                    <Image src={content.image_1} alt="paint-roller" width={83} height={83} />
                </div>

                <Image src={content.image_2} alt="i1" width={584} height={512} />

                <div className="flex items-center justify-center min-h-[300px] md:min-h-[512px]">
                    <span className="text-[44px] text-wrap max-w-[200px] text-center md:text-start">{content.n_3}</span>
                </div>
            </div>

            <div className="flex flex-row justify-evenly items-center min-h-[512px] flex-wrap">
                <Image src={content.image_4} alt="i2" width={530} height={530} />

                <div className="flex flex-col items-start justify-center min-h-[300px] md:min-h-[512px] max-w-[400px] text-center md:text-start">
                    <span className="text-[44px] w-full">{content.n_5}</span>
                    <span className="text-[26px]">{content.n_6}</span>
                </div>
                
                <div className="flex flex-col items-start justify-center min-h-[300px] md:min-h-[512px] max-w-[320px] text-center md:text-start">
                    <span className="text-[44px] w-full">{content.n_7}</span>
                    <span className="text-[26px]">{content.n_8}</span>
                </div>
            </div>
        </div>
    );
}
