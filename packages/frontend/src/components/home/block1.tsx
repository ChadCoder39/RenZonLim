import Image from "next/image";
import data from "@/app/data.json";
import Link from "next/link";

export default function HomeBlock1() {
    const content = data.app.block1;
    return (
        <div className="p-10 bg-home_block_1 bg-no-repeat bg-cover bg-center h-[823px]">
            <div className="relative flex flex-col h-full items-center justify-center text-[#eae2d7]">
                <span className="flex items-start text-start justify-start text-[44px] md:text-[76px] ml-0 lg:ml-[-425px] ">
                    {content.n_1}
                </span>
                <span className="flex items-end text-end justify-end text-[44px] md:text-[76px] mr-0 lg:mr-[-425px]">
                    {content.n_2}
                </span>

                <span className="absolute top-[200px] md:top-[200px] lg:top-[280px] text-[20px] mr-0 md:mr-[-200px] lg:mr-[-500px] max-w-[400px] text-center md:text-end">
                    {content.n_3}
                </span>

                <div className="absolute ml-0 md:ml-[-300px] top-[490px] text-[26px] md:text-[36px] max-w-[350px] text-center flex flex-row">
                    <span>{content.n_4}</span>
                    
                    <Link href="/calculate">
                        <Image src={content.image_1} className="w-8 h-8 md:w-10 md:h-10 mt-4" width={500} height={500} alt="arrow"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
