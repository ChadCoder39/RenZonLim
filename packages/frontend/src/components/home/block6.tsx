import Image from "next/image";

export default function HomeBlock6() {
    return (
        <div className="flex flex-col gap-0 px-10">
            <div className="flex flex-row justify-evenly items-center min-h-[512px] flex-wrap">
                <div className="flex items-center justify-center min-h-[300px] md:min-h-[512px]">
                    <Image src={"/assets/icons/paint-roller.png"} alt="paint-roller" width={83} height={83} />
                </div>

                <Image src={"/assets/images/home_block_6_1.png"} alt="i1" width={584} height={512} />

                <div className="flex items-center justify-center min-h-[300px] md:min-h-[512px]">
                    <span className="text-[44px] text-wrap max-w-[200px] text-center md:text-start">20 YEARS ON THE MARKET</span>
                </div>
            </div>

            <div className="flex flex-row justify-evenly items-center min-h-[512px] flex-wrap">
                <Image src={"/assets/images/home_block_6_2.png"} alt="i1" width={530} height={530} />

                <div className="flex flex-col items-start justify-center min-h-[300px] md:min-h-[512px] max-w-[400px] text-center md:text-start">
                    <span className="text-[44px] w-full">100+ PROJECTS</span>
                    <span className="text-[26px]">We are a leading construction and renovation company</span>
                </div>
                
                <div className="flex flex-col items-start justify-center min-h-[300px] md:min-h-[512px] max-w-[320px] text-center md:text-start">
                    <span className="text-[44px] w-full">80+ CLIENTS</span>
                    <span className="text-[26px]">Testimonials from our clients are a guarantee of quality work</span>
                </div>
            </div>
        </div>
    );
}