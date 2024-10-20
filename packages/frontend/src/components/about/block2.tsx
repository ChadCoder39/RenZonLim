import Image from "next/image";

export default function AboutBlock2() {
    return (
        <div className="flex flex-col p-6 items-center">
            <span className="text-[40px] md:text-[54px] text-center space-x-20 whitespace-nowrap text-wrap">OUR MAIN ACHIEVEMENTS</span>

            <div className="flex w-full flex-col xl:flex-row items-center xl:items-start justify-center mt-14">
                <div className="flex flex-row gap-4">
                    <span className="text-[54px] md:text-[74px]">01</span>
                    <span className="text-[20px] md:text-[28px] max-w-[305px] mt-10">getting faster in renovation process with the same hight quality level - 1 month for major renovation from scratch in your apartment</span>
                </div>

                <div className="divider divider-vertical xl:divider-horizontal"></div>

                <div className="flex flex-row gap-4 items-start">
                    <span className="text-[54px] md:text-[74px]">02</span>
                    <span className="text-[20px] md:text-[28px] max-w-[305px] mt-10">a team of top professionals for perfect results in all types of repairs</span>
                </div>

                <div className="divider divider-vertical xl:divider-horizontal"></div>

                <div className="flex flex-row gap-4">
                    <span className="text-[54px] md:text-[74px]">03</span>
                    <span className="text-[20px] md:text-[28px] max-w-[305px] mt-10">cooperation with manufacturers of building materials, which allows us to offer affordable prices to our clients</span>
                </div>
            </div>

            <Image src={"/assets/images/about_block_2_1.png"} alt="about-2-1" width={1375} height={320} className="my-14"/>
        </div>
    );
}